import { Link, Outlet } from 'react-router-dom';

import Header from '../pages/Header';

const RootLayout = () => {



    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();


    return (
        <div className='flex justify-around  flex-col w-[100%] text-l'>
            <Header />


            <main className='bg-white-900 w-[100%]'>
                <Outlet />
            </main>
            <footer className='h-fit  bg-yellow-400 p-3 text-sm font-light text-blue-800'>
                <p
                    id='header'
                    className='p-2 text-4xl'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                <div className='flex justify-evenly flex-col mb-4 p-3 md:flex-row'>

                    <div className='flex justify-start flex-col gap-1 font-light mt-5 text-lg text-blue-800'>
                        <h3 className='mb-1'>Socials</h3>
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>TikTok</Link>
                        <Link>Snapchat</Link>
                        <Link>X</Link>
                        <Link>LinkedIn</Link>
                    </div>
                    <div className='flex justify-start flex-col gap-1 font-light mt-5 text-lg text-blue-800'>
                        <h3 className='mb-1'>Products</h3>
                        <Link>Peanut Butter</Link>
                        <Link>Roasted Peanuts</Link>
                        <Link>Ground Peanuts</Link>
                        <Link>Raw Peanuts</Link>
                        <Link>Merchandise</Link>
                        <Link>How it's made</Link>
                    </div>

                    <div className='flex justify-start flex-col gap-1 font-light mt-5 text-lg text-blue-800'>
                        <h3 className='mb-1'>Company</h3>
                        <Link>About</Link>
                        <Link>Contact</Link>
                        <Link>Recipes</Link>
                        <Link>Blog</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                    </div>


                </div>

                <hr
                    className='my-2 '
                />
                <div className='flex justify-center flex-row px-2 py-1'>
                    <p className='font-bold text-blue-800'>Copyright @ {currentYear} Fralon Peanuts. All rights reserved.</p>

                </div>
            </footer>

        </div >
    )
}

export default RootLayout