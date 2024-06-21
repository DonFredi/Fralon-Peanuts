import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const password = watch('password'); // Watch the password input

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3500/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });
            if (!response.ok) {
                throw new Error('Failed to create new user');
            }
            const result = await response.json();
            if (result.user) {
                navigate('/login')
            }
            console.log(result);

        } catch (error) {
            console.error('Error:', error);
        }

        onSignUp();
    };

    return (
        <div>
            <h1
                id='header'
                className='text-3xl text-center text-yellow-400 mb-10 p-4'><span className='text-extrabold'>Fralon</span>Peanuts</h1>
            <div className='items-center flex flex-col'>
                <div className='h-[530px] px-4 py-9 rounded-lg text-center flex justify-center inset-0 bg-black bg-opacity-10 backdrop-blur-sm'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                        <h1 className='text-white font-bold mb-2'>Sign Up for an account</h1>

                        <div className='flex justify-between flex-col mb-4 font-light'>
                            <label className='text-white font-semibold' htmlFor="username">Username</label>
                            <input
                                className='px-10 py-2 rounded-sm'
                                type="text"
                                placeholder='Type your username...'
                                {...register('username', {
                                    required: 'Valid username is required'

                                })}
                            />
                            {errors.username && <p className='text-red mt-1'>{errors.username.message}</p>}
                        </div>
                        <div className='flex justify-between flex-col mb-4 font-light'>
                            <label className='text-white font-semibold' htmlFor="email">Email</label>
                            <input
                                className='px-10 py-2 rounded-sm'
                                type="text"
                                placeholder='Type your email...'
                                {...register('email', {
                                    required: 'Valid email is required',
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: 'Enter a valid email address'
                                    }
                                })}
                            />
                            {errors.email && <p className='text-red mt-1'>{errors.email.message}</p>}
                        </div>

                        <div className='flex justify-between flex-col mb-4 font-light'>
                            <label className='text-white font-semibold' htmlFor="email">Phone :</label>
                            <input
                                className='px-10 py-2 rounded-sm'
                                type="number"
                                placeholder='Type your email...'
                                {...register('phoneNumber', {
                                    required: 'Valid phone number is required',
                                    pattern: {
                                        message: 'Enter a valid phone number'
                                    }
                                })}
                            />
                            {errors.phone && <p className='text-red mt-1'>{errors.phone.message}</p>}
                        </div>


                        <div className='flex justify-between items-center flex-col mb-4 font-light'>
                            <label className='text-white font-semibold' htmlFor="password">Password</label>
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
                            {errors.password && <p className='text-red-500 font-bold'>{errors.password.message}</p>}
                        </div>
                        <div className='flex justify-between items-center flex-col mb-4 font-light'>
                            <label className='text-white font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                className='px-10 py-2 rounded-sm'
                                type="password"
                                placeholder='Confirm your password...'
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: (value) => value === password || 'Passwords do not match'
                                })}
                            />
                            {errors.confirmPassword && <p className='text-red-500 font-bold mt-1'>{errors.confirmPassword.message}</p>}
                        </div>
                        <button className='bg-blue-600 text-white text-center py-2 px-[6rem]  mt-4 font-bold hover:bg-blue-500'>Sign Up</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
