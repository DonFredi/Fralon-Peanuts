import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-4'>
            <h1 className='text-center' >404 - Not Found</h1>
            <Link
                className='text-blue-600 text-center text-underline'
                to="/">Visit homepage</Link>
        </div>
    );
};

export default NotFound;
