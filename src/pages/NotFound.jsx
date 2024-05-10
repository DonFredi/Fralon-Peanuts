import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-4 h-[100vh] flex flex-col items-center'>
            <h1 className='text-center my-6 font-bold text-lg' >404 - Not Found</h1>
            <Link
                className='text-blue-600 underline mt-[50px] py-3 hover:no-underline'
                to="/">Visit homepage</Link>
        </div>
    );
};

export default NotFound;
