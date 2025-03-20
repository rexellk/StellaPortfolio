import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const LandingPage = () => {
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if container exists
        if (!containerRef.current) {
            console.error('Container reference is not available');
            setError('Container initialization failed');
            return;
        }

        const container = containerRef.current;
        let frameId = null;
        let scene, camera, renderer, model;
        let clock = new THREE.Clock();

        try {
            // Initialize three.js components
            scene = new THREE.Scene();

            // Create subtle blue gradient background
            const bgCanvas = document.createElement('canvas');
            bgCanvas.width = 2;
            bgCanvas.height = 512;
            const bgCtx = bgCanvas.getContext('2d');

            // Create a subtle blue gradient background
            const bgGradient = bgCtx.createLinearGradient(0, 0, 0, 512);
            bgGradient.addColorStop(0, '#f5f8fd'); // Very light blue at top
            bgGradient.addColorStop(1, '#ffffff'); // White at bottom

            bgCtx.fillStyle = bgGradient;
            bgCtx.fillRect(0, 0, 2, 512);

            const backgroundTexture = new THREE.CanvasTexture(bgCanvas);
            backgroundTexture.wrapS = THREE.RepeatWrapping;
            backgroundTexture.wrapT = THREE.RepeatWrapping;
            backgroundTexture.repeat.set(1, 1);

            scene.background = backgroundTexture;

            // Camera setup with better FOV
            camera = new THREE.PerspectiveCamera(
                60, // Slightly lower FOV for less distortion
                container.clientWidth / container.clientHeight,
                0.1,
                1000
            );
            camera.position.set(0, 0, 5);

            // Enhanced renderer setup
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance'
            });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
            renderer.physicallyCorrectLights = true;
            container.appendChild(renderer.domElement);

            // Enhanced lighting for transparent objects
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // Main directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(1, 2, 2);
            scene.add(directionalLight);

            // Fill light from opposite side 
            const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
            fillLight.position.set(-2, -1, -1);
            scene.add(fillLight);

            // Top light
            const topLight = new THREE.DirectionalLight(0xffffff, 0.3);
            topLight.position.set(0, 5, 0);
            scene.add(topLight);

            // Add environment map for reflections
            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            pmremGenerator.compileEquirectangularShader();

            // Create a white environment for clean reflections
            const envScene = new THREE.Scene();
            envScene.background = new THREE.Color(0xffffff);
            const envCubeRenderTarget = pmremGenerator.fromScene(envScene);
            scene.environment = envCubeRenderTarget.texture;

            // Setup model loading
            const dracoLoader = new DRACOLoader();
            try {
                dracoLoader.setDecoderPath('/draco/');
            } catch (e) {
                console.warn('Failed to set Draco decoder path to /draco/, trying alternative path');
                try {
                    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
                } catch (e2) {
                    console.error('Failed to set Draco decoder path:', e2);
                }
            }

            const loader = new GLTFLoader();
            loader.setDRACOLoader(dracoLoader);

            // Load the model with error handling
            console.log('Loading model from path: model/stla.glb');
            loader.load(
                'model/stla.glb',
                (gltf) => {
                    console.log('Model loaded successfully');

                    // Compute the center of the model
                    const box = new THREE.Box3().setFromObject(gltf.scene);
                    const center = new THREE.Vector3();
                    box.getCenter(center);

                    // Create the model (just one layer now - light blue)
                    model = gltf.scene.clone();
                    model.position.sub(center); // Center the model at origin
                    model.position.y -= 0.2; // Position it slightly lower
                    model.rotation.y = Math.PI * 0.15; // Add initial rotation
                    model.scale.set(2.1, 2.1, 2.1); // Use the outer model scale

                    // Apply light blue material
                    model.traverse((child) => {
                        if (child.isMesh) {
                            if (child.geometry) {
                                child.geometry.computeVertexNormals();
                            }

                            // Create a light blue material
                            child.material = new THREE.MeshPhysicalMaterial({
                                color: new THREE.Color('#8BC0DC'),  // Light blue
                                roughness: 0.3,           // Slightly rougher for contrast
                                metalness: 0.05,          // Less metallic
                                transparent: true,
                                opacity: 0.8,             // More solid than before (was 0.4)
                                clearcoat: 0.2,
                                clearcoatRoughness: 0.3,
                                reflectivity: 0.2,
                                envMapIntensity: 0.7,
                                side: THREE.DoubleSide
                            });
                        }
                    });

                    scene.add(model);
                    setLoading(false);
                },
                (xhr) => {
                    const progress = xhr.loaded / xhr.total * 100;
                    console.log(`Model loading progress: ${progress.toFixed(2)}%`);
                },
                (error) => {
                    console.error('Model loading failed:', error);
                    setError(`Failed to load model: ${error.message}`);
                    setLoading(false);

                    // Create a fallback with a single sphere
                    const geometry = new THREE.SphereGeometry(1.1, 32, 32);
                    const material = new THREE.MeshPhysicalMaterial({
                        color: new THREE.Color('#8BC0DC'),  // Light blue
                        roughness: 0.3,
                        metalness: 0.05,
                        transparent: true,
                        opacity: 0.8,           // More solid (was 0.4)
                        clearcoat: 0.2,
                        clearcoatRoughness: 0.3,
                        reflectivity: 0.2,
                        envMapIntensity: 0.7,
                        side: THREE.DoubleSide
                    });
                    const sphere = new THREE.Mesh(geometry, material);
                    sphere.position.y -= 0.2; // Match the model's vertical position
                    scene.add(sphere);
                }
            );

            // Mouse movement handling
            let targetRotationX = 0, targetRotationY = 0;
            const onMouseMove = (event) => {
                const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
                const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
                targetRotationY = normalizedX * 0.2;
                targetRotationX = normalizedY * 0.2;
            };
            window.addEventListener('mousemove', onMouseMove);

            // Animation loop with rotation
            const animate = () => {
                frameId = requestAnimationFrame(animate);

                // Find the model
                const models = scene.children.filter(child =>
                    child.type === 'Group' && child.scale.x >= 1.8
                );

                if (models.length > 0) {
                    // Get the model
                    const model = models[0];

                    // Calculate new rotation
                    model.rotation.y += (targetRotationY - model.rotation.y) * 0.1;
                    let newRotationX = model.rotation.x + (targetRotationX - model.rotation.x) * 0.1;
                    newRotationX = Math.max(Math.min(newRotationX, 0.3), -0.3);
                    model.rotation.x = newRotationX;
                }

                if (renderer && scene && camera) {
                    renderer.render(scene, camera);
                }
            };

            // Start animation
            clock.start();
            animate();

            // Enhanced resize handler
            const onResize = () => {
                if (camera && renderer && container) {
                    camera.aspect = container.clientWidth / container.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(container.clientWidth, container.clientHeight);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                }
            };
            window.addEventListener('resize', onResize);

            // Clean up
            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('resize', onResize);

                if (frameId !== null) {
                    cancelAnimationFrame(frameId);
                }

                if (container && renderer && renderer.domElement) {
                    try {
                        container.removeChild(renderer.domElement);
                    } catch (e) {
                        console.warn('Error removing renderer from DOM:', e);
                    }
                }

                // Dispose Three.js resources
                if (renderer) {
                    renderer.dispose();
                }

                if (pmremGenerator) {
                    pmremGenerator.dispose();
                }
            };
        } catch (e) {
            console.error('Error initializing Three.js scene:', e);
            setError(`Initialization error: ${e.message}`);
            setLoading(false);
            return () => { };
        }
    }, []);

    return (
        <div>
            <div
                id="canvas-container"
                ref={containerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    background: 'linear-gradient(to bottom, #f0f8ff, #ffffff)'
                }}
            >
                {/* Three.js canvas will be appended here */}
            </div>

            {loading && !error && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#0A66C2',
                    fontSize: '18px',
                    fontWeight: '300',
                    zIndex: 1000
                }}>
                    Loading...
                </div>
            )}

            {error && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#ff3333',
                    fontSize: '18px',
                    zIndex: 1000
                }}>
                    Error: {error}<br />
                    <small>Check the console for more details.</small>
                </div>
            )}
        </div>
    );
};

export default LandingPage;