import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='p-4'>
            <h1>404 - Not Found</h1>
            <Link
                className='text-blue-400 text-underline'
                to="/">Visit homepage</Link>
        </div>
    );
};

export default NotFound;
