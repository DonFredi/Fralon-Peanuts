import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3500'; // Adjust as per your backend URL

const SignUp = () => {
    const [signUpErrorMsg, setSignUpErrorMsg] = useState('');
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password'); // Watch for changes in password field

    const handleSignUp = async (data) => {
        try {
            const response = await axios.post('/signup', { data },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                });

            if (response && response.data && response.data.success) {
                // Handle success, e.g., redirect or show success message
                console.log('User signed up successfully:', response.data);
            }
        } catch (error) {
            console.log('Error signing up:', error.response.data);
            // Handle error, e.g., show error message
            setSignUpErrorMsg(error.response.data.message);
        }
    };

    return (
        <div
            className='flex justify-between items-center flex-col h-[100vh] p-3'>

            <div className='bg-black bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center mb-3'>
                <h1
                    id='header'
                    className='text-4xl text-center text-yellow-400 mb-[30px] p-6'>
                    <span className='text-extrabold'>Fralon</span> Peanuts
                </h1>
                <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col items-center'>
                    <h1 className='text-black font-bold mb-2'>Sign Up for an account</h1>

                    <div className='flex justify-between flex-col mb-4 font-light'>
                        <label className='text-black font-semibold' htmlFor="username">Username</label>
                        <input
                            className='px-10 py-2 rounded-sm'
                            type="text"
                            placeholder='Type your username...'
                            {...register('username', {
                                required: 'Username is required'
                            })}
                        />
                        {errors.username && <p className='text-red mt-1'>{errors.username.message}</p>}
                    </div>

                    <div className='flex justify-between flex-col mb-4 font-light'>
                        <label className='text-black font-semibold' htmlFor="email">Email</label>
                        <input
                            className='px-10 py-2 rounded-sm'
                            type="text"
                            placeholder='Type your email...'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    message: 'Enter a valid email address'
                                }
                            })}
                        />
                        {errors.email && <p className='text-red mt-1'>{errors.email.message}</p>}
                    </div>

                    <div className='flex justify-between flex-col mb-4 font-light'>
                        <label className='text-black font-semibold' htmlFor="phoneNumber">Phone Number</label>
                        <input
                            className='px-10 py-2 rounded-sm'
                            type="text"
                            placeholder='Type your phone number...'
                            {...register('phoneNumber', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: 'Enter a valid 10-digit phone number'
                                }
                            })}
                        />
                        {errors.phoneNumber && <p className='text-red mt-1'>{errors.phoneNumber.message}</p>}
                    </div>

                    <div className='flex justify-between items-center flex-col mb-4 font-light'>
                        <label className='text-black font-semibold' htmlFor="password">Password</label>
                        <input
                            className='px-10 py-2 rounded-sm'
                            type="password"
                            placeholder='Type your password...'
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long'
                                }
                            })}
                        />
                        {errors.password && <p className='text-red mt-1'>{errors.password.message}</p>}
                    </div>

                    <div className='flex justify-between items-center flex-col mb-4 font-light'>
                        <label className='text-black font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className='px-10 py-2 rounded-sm'
                            type="password"
                            placeholder='Confirm your password...'
                            {...register('confirmPassword', {
                                required: 'Confirm Password is required',
                                validate: (value) => value === password || 'Passwords do not match'
                            })}
                        />
                        {errors.confirmPassword && <p className='text-red mt-1'>{errors.confirmPassword.message}</p>}
                    </div>

                    <button
                        className='bg-blue-600 text-white w-full py-2 px-6 mt-4 font-bold hover:bg-blue-500'
                        type="submit"
                    >
                        Sign Up
                    </button>
                    {signUpErrorMsg && <p className='text-red-600 mt-2'>{signUpErrorMsg}</p>}
                    <p className='mt-4 '>Already have an account? <Link to="/login" className='text-blue-600 underline hover:no-underline font-bold'>
                        Log In
                    </Link></p>
                    <div className='flex flex-row p-2 gap-6 items-center w-[100%] justify-center text-yellow-500 text-2xl mt-4'>
                        <Link><FaFacebookSquare /></Link>
                        <Link><FaInstagram /></Link>
                        <Link> <BsTwitterX /></Link>
                        <Link><FaSnapchatSquare /></Link>
                        <Link><FaTiktok /></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;