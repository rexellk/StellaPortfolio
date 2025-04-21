import React, { useEffect, useRef } from 'react';
import './PhotoGallery.css'; // You'll need to create this CSS file

const PhotoGallery = ({ photos }) => {
    // 创建引用
    const galleryRef = useRef(null);

    // 使用Intersection Observer观察元素何时进入视口
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 当画廊进入视口时，为所有图片项添加active类
                        if (galleryRef.current) {
                            const items = galleryRef.current.querySelectorAll('.gallery-item');
                            items.forEach((item, index) => {
                                // 使用setTimeout创建错开的动画效果
                                setTimeout(() => {
                                    item.classList.add('active');
                                }, index * 200);
                            });
                        }
                        // 一旦触发动画，停止观察
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 } // 当20%的元素可见时触发
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    // Calculate number of rows needed
    const rows = Math.ceil(photos.length / 2);

    return (
        <div className="photo-gallery" ref={galleryRef}>
            {/* Generate rows of photos with alternating layouts */}
            {Array.from({ length: rows }).map((_, rowIndex) => {
                const startIdx = rowIndex * 2;
                const photosInRow = photos.slice(startIdx, startIdx + 2);

                return (
                    <div key={rowIndex} className="gallery-row">
                        {/* First photo */}
                        {photosInRow[0] && (
                            <div className={`gallery-item ${rowIndex % 2 === 0 ? 'wide' : 'narrow'}`}>
                                <img
                                    src={photosInRow[0].src}
                                    alt={photosInRow[0].title || 'Gallery image'}
                                    className="gallery-image"
                                />
                                {photosInRow[0].title && (
                                    <p className="gallery-caption">{photosInRow[0].title}</p>
                                )}
                            </div>
                        )}

                        {/* Second photo */}
                        {photosInRow[1] && (
                            <div className={`gallery-item ${rowIndex % 2 === 0 ? 'narrow' : 'wide'}`}>
                                <img
                                    src={photosInRow[1].src}
                                    alt={photosInRow[1].title || 'Gallery image'}
                                    className="gallery-image"
                                />
                                {photosInRow[1].title && (
                                    <p className="gallery-caption">{photosInRow[1].title}</p>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default PhotoGallery;