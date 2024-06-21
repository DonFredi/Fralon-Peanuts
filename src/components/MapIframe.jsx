import React from 'react';
import Map from '../assets/map.png';

const MapIframe = () => {

    return (
        <div style={{ width: '100%', height: '400px' }}
            className='mb-[150px] mt-[60px]'
        >
            <img
                title="Google Map"
                src={Map}
                width="100%"
                height="100%"
                style={{
                    border: 0,
                    height: '500px'
                }}
                border="0"
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
};

export default MapIframe;
