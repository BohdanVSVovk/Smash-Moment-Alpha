import React, { useState } from 'react';
import gameData from './assets/Answer'; // Adjust the path as per your file structure

const GameImages = ({ isBothPlayerAnswersCorrect, GlobalTournamentAnswer }) => {
    // Assuming gameData[0] has your initial images and GIFs
    const initialImagePaths = gameData[0].imagePaths;
    const hoverGifPaths = gameData[0].gifPaths;

    // Path to your border image
    const borderImagePath = '/assets/GameImages/Center_CRT.png';

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [gifReloadKey, setGifReloadKey] = useState(0); // State to force reload GIF

    const handleImageHover = (index) => {
        setHoveredIndex(index);
        setGifReloadKey(prevKey => prevKey + 1); // Increment key to force reload
    };

    return (
        <div className="flex flex-col items-center bg-black bg-opacity-50">
            <div className="flex justify-center">
                {initialImagePaths.map((path, index) => (
                    <div
                        key={index}
                        className="image-with-border"
                        style={{ 
                            position: 'relative', 
                            width: '420px', 
                            height: '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onMouseEnter={() => handleImageHover(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <img
                                className='px-1 pb-12'
                                src={path}
                                alt={`Image ${index + 1}`}
                                style={{ 
                                    maxWidth: '90%', 
                                    maxHeight: '90%', 
                                    objectFit: 'contain'
                                }}
                            />
                            {hoveredIndex === index && (
                                <img
                                    className='px-1 pb-12'
                                    src={hoverGifPaths[index]}
                                    alt={`GIF ${index + 1}`}
                                    style={{
                                        position: 'absolute',
                                        maxWidth: '90%', 
                                        maxHeight: '90%', 
                                        objectFit: 'contain',
                                        pointerEvents: 'none',
                                    }}
                                    lazy="true" // Lazy load the GIF
                                />
                            )}
                        </div>
                        <img
                            src={borderImagePath}
                            alt="Border"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}    

export default GameImages;
