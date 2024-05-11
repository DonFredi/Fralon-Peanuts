import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import DataContext from '../pages/DataContext';
import { IoChevronBack } from "react-icons/io5";


const Header = () => {
    const { state, width } = useContext(DataContext);
    const [sidebar, setSidebar] = useState(false);





    const handleHamBtn = () => {

        setSidebar(!sidebar);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }


    return (
        <div>
            <header className='bg-white-300 w-[100%] flex justify-between px-2 py-6  opacity-70 shadow-xl h-[85px]'>

                {width < 760 ?
                    <div className='flex flex-row justify-between w-[57%]'>

                        <RxHamburgerMenu

                            onClick={handleHamBtn}
                            className='bg-transparent text-black right-0 top-6 w-[48px] h-[48px] hover:bg-slate-300 px-2'
                        />
                        <div>
                            <h1 className='logo text-center text-3xl mt-1 flex justify-center font-extrabold text-yellow-400 '>Fralon</h1>
                        </div>

                    </div>
                    :
                    <div className='flex justify-between gap-x-20 flex-row'>

                        <h1

                            className=' logo text-center mb-7 text-4xl  text-yellow-400 mr-8  ml-3'
                        >Fralon</h1>
                        <nav className='flex justify-around flex-row w-[100%] font-serif text-xl'>
                            <Link to="/"

                                className='flex-1 text-blue-900 font-sans font-semibold  w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Home</Link>
                            <Link to="products" className='flex-1 text-blue-900 font-sans font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Products</Link>
                            <Link to="recipes" className='flex-1 text-blue-900 font-sans font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Recipes</Link>
                            <Link to="contact" className='flex-1 text-blue-900 font-sans font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Contacts</Link>

                        </nav>


                    </div>
                }

                <div className="relative mr-3">
                    <Link to="cart" className='block'>

                        <GiShoppingCart
                            className='text-5xl text-black cursor-pointer hover:text-yellow-500'

                        />

                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{state.cartItems.length}</span>
                    </Link>


                </div>


            </header>

            {sidebar && (
                <div
                    id={`sidebar ${sidebar ? 'open' : ''}`}

                    className={`fixed flex justify-between flex-col top-0 h-[70%] w-full bg-gray-200 z-50 overflow-hidden transition-transform duration-500 ease-in-out transform ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>

                    <div className='top-[10px] py-7 px-5  flex justify-between flex-row items-center'>
                        <span
                            id="logo"
                            className='text-yellow-500 text-3xl font-bold p-2'>Fralon Peanuts</span>

                        <IoChevronBack
                            onClick={closeSidebar}
                            className='text-2xl bg-red-400 my-auto text-white text-center h-[2rem] w-[2rem] font-bold hover:bg-red-300 rounded-md'
                        />
                    </div>
                    <div className='flex justify-center flex-col gap-10'>
                        <Link to="/"
                            onClick={handleHamBtn}
                            className='block text-blue-900 font-bold w-100% px-2 text-center py-3 hover:bg-yellow-400 '>Home</Link>
                        <Link to="products"
                            onClick={handleHamBtn}
                            className='block text-blue-900 font-bold w-100% px-2 text-center py-3  hover:bg-yellow-400 '>Products</Link>
                        <Link to="recipes"
                            onClick={handleHamBtn}
                            className='block text-blue-900 font-bold w-100% px-2 text-center py-3 hover:bg-yellow-400 '>Recipes</Link>
                        <Link to="contact"
                            onClick={handleHamBtn}
                            className='block text-blue-900 font-bold w-100% px-2 text-center py-3  hover:bg-yellow-400 '>Contacts</Link>

                    </div>
                    <div className='flex justify-center gap-x-3 text-blue-600 flex-row p-4'>
                        <Link>Home |</Link>
                        <Link>Products |</Link>
                        <Link>About us |</Link>
                    </div>
                </div>

            )
            }


        </div>

    )
}

export default Header