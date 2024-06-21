import React from 'react'
import { useForm } from 'react-hook-form'


const LogIn = ({ onAuth }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data) => {

        try {
            const response = await fetch('http://localhost:3500/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });
            if (response.error) {
                console.log(response.error)
            }
            const result = await response.json();
            console.log(result);

        } catch (error) {
            console.error('Error:', error);
        }

        onAuth();
    }

    return (
        <div className='flex justify-start flex-col'>
            <h1
                id='header'
                className='text-3xl text-center text-yellow-400 mb-[100px] p-4'><span className='text-extrabold'>Fralon</span>Peanuts</h1>
            <div className='items-center flex flex-col'>
                <div className='h-[400px] px-4 py-9 rounded-lg text-center flex justify-center inset-0 bg-black bg-opacity-10 backdrop-blur-sm'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col items-center'
                    >
                        <h1 className='text-white font-bold mb-2'>Log In to your account</h1>
                        <div className='flex justify-between flex-col mb-4 font-light'>
                            <label
                                className='text-white font-semibold'
                                htmlFor="email">Email</label>
                            <input
                                className='px-10 py-2 rounded-sm'
                                type="text"
                                placeholder='Type your email...'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Enter a valid email address'
                                    }
                                }
                                )}

                            />
                            {errors.email && <p className='text-red mt-1'>{errors.email.message}</p>}
                        </div>



                        <div className='flex justify-between items-center flex-col mb-4 font-light'>
                            <label
                                className='text-white font-semibold'
                                htmlFor="password">Password</label>
                            <input
                                className=' px-10 py-2 rounded-sm '
                                type="password"
                                placeholder='Type your password...'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long'
                                    }
                                }
                                )}

                            />
                            {errors.password && <p className='text-red mt-1'>{errors.password.message}</p>}

                        </div>

                        <button className='bg-blue-600 text-white py-2 px-[6.4rem] mt-4 font-bold hover:bg-blue-500'>Log In</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default LogIn