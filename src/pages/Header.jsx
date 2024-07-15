import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import DataContext from '../pages/DataContext';
import { IoChevronBack } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    const { state, width } = useContext(DataContext);
    const [sidebar, setSidebar] = useState(false);

    const handleHamBtn = () => {
        setSidebar(!sidebar);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }

    // Ensure state is defined and has cartItems property before accessing it
    const cartItemCount = state?.cartItems?.length || 0;

    return (
        <div>
            <header className='bg-white-300 w-[100%] flex justify-between px-2 py-8 items-center h-[100px]'>

                {width < 860 ?
                    <div className='flex flex-row justify-between  w-[100%]'>
                        <div className='flex justify-between items-center'>
                            <p id='header' className='text-3xl text-yellow-400'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                        </div>
                        <RxHamburgerMenu
                            onClick={handleHamBtn}
                            className='bg-transparent text-black right-0 top-6 w-[48px] h-[48px] hover:bg-yellow-400 bg-blue-300 rounded-sm px-2'
                        />
                    </div>
                    :
                    <div className='flex justify-between w-[100%]  items-center flex-row'>
                        <p id='header' className='text-4xl text-yellow-500 w-fit'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                        <nav className='flex justify-between flex-row items-center text-xl'>
                            <Link to="" className='flex-1 text-blue-900 font-semibold  w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Home</Link>
                            <Link to="products" className='flex-1 text-blue-900 font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Products</Link>
                            <Link to="recipes" className='flex-1 text-blue-900  font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Recipes</Link>
                            <Link to="contact" className='flex-1 text-blue-900 font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Contacts</Link>
                            <div className="relative mr-3">
                                <Link to="cart" className='block'>
                                    <GiShoppingCart
                                        className='text-5xl text-black cursor-pointer hover:text-yellow-500'
                                    />
                                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItemCount}</span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                }
            </header>

            {sidebar && (
                <div
                    id={`sidebar ${sidebar ? 'open' : ''}`}
                    className={`fixed  z-50 flex justify-start p-3 flex-col top-0 h-[72%] w-full bg-gray-200 bg-opacity-100 overflow-hidden transform ${sidebar ? 'animate-bounceIn' : 'animate-bounceOut'}`}
                >
                    <div className='top-[10px] py-3 mt-2 px-5  flex justify-between flex-row items-center'>
                        <p id='header' className='text-4xl text-yellow-500'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                        <IoChevronBack
                            onClick={closeSidebar}
                            className='text-2xl bg-red-400 my-auto text-white text-center h-[2rem] w-[2rem] font-bold hover:bg-red-300 rounded-md'
                        />
                    </div>
                    <div className='flex justify-center flex-col gap-6'>
                        <div className='flex flex-row justify-between'>
                            <Link to="cart" className='block'>
                                <GiShoppingCart
                                    className='text-5xl text-black cursor-pointer hover:text-yellow-500'
                                />
                            </Link>
                            <Link to=''
                                className='block'
                            >
                                <CgProfile
                                    className='text-4xl text-black cursor-pointer hover:text-yellow-500'
                                />
                            </Link>
                        </div>

                        <Link to="/" onClick={handleHamBtn} className='block text-blue-900 font-bold w-100% p-2 text-center hover:bg-yellow-400 '>Home</Link>
                        <Link to="products" onClick={handleHamBtn} className='block text-blue-900 font-bold w-100% p-2 text-center  hover:bg-yellow-400 '>Products</Link>
                        <Link to="recipes" onClick={handleHamBtn} className='block text-blue-900 font-bold w-100% p-2 text-center hover:bg-yellow-400 '>Recipes</Link>
                        <Link to="contact" onClick={handleHamBtn} className='block text-blue-900 font-bold w-100% p-2 text-center   hover:bg-yellow-400 '>Contacts</Link>
                    </div>
                    <div className='flex justify-center flex-row gap-x-3 text-blue-700 p-2 mt-8'>
                        <Link to='/login'
                            className='underline hover:no-underline'
                        >Log In</Link>
                        <Link to='/signup'
                            className='underline hover:no-underline'
                        >Sign Up</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;
