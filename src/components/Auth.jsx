import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Background from '../assets/login-bg.jpeg';

const Auth = ({ onAuth }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-cover bg-center" style={{
            height: 'fit',
            backgroundImage: `url(${Background})`
        }}>
            {isSignUp ? (
                <SignUp onSignUp={onAuth} />
            ) : (
                <LogIn onAuth={onAuth} />
            )}
            <div className="text-center mt-4">
                <button onClick={toggleForm} className="text-white hover:underline  font-bold ">
                    {isSignUp ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
                </button>
            </div>
        </div>
    );
}

export default Auth;