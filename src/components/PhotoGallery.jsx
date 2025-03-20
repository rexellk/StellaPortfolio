import React from 'react';
import './PhotoGallery.css'; // You'll need to create this CSS file

const PhotoGallery = ({ photos }) => {
    // Calculate number of rows needed
    const rows = Math.ceil(photos.length / 2);

    return (
        <div className="photo-gallery">
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