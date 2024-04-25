import React, { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';

const ImageSlider = () => {
    const { state } = useContext(DataContext)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === state.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change the duration (in milliseconds) between image transitions as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center w-full bg-slate-100 mt-6 py-8 mb-100px flex-col items-center'>
            <img
                src={state.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className='px-8 h-[300px] mt-5 mb-3 w-fit'
                style={{ mixBlendMode: 'multiply', transition: 'opacity 0.5s ease-in-out' }}
            />
        </div>
    );
};

export default ImageSlider;
