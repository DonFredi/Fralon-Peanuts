import React, { useContext, useState } from 'react'
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
            <header className='bg-white-300 w-[100%] flex justify-between px-2 py-8 items-center h-[100px]'>

                {width < 760 ?
                    <div className='flex flex-row justify-between  w-[100%]'>


                        <div className='flex justify-center items-center'>
                            <p
                                id='header'
                                className='text-3xl text-yellow-400'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                        </div>
                        <div></div>
                        <RxHamburgerMenu

                            onClick={handleHamBtn}
                            className='bg-transparent text-black right-0 top-6 w-[48px] h-[48px] hover:bg-yellow-400 rounded-sm px-2'
                        />
                    </div>
                    :
                    <div className='flex justify-between gap-x-[400px] items-center flex-row'>


                        <p
                            id='header'
                            className='text-4xl text-yellow-500 w-fit'><span className='text-extrabold'>Fralon</span>Peanuts</p>



                        <nav className='flex justify-end flex-row w-[100%] text-xl'>
                            <Link to="/"

                                className='flex-1 text-blue-900 font-semibold  w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Home</Link>
                            <Link to="products" className='flex-1 text-blue-900 font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Products</Link>
                            <Link to="recipes" className='flex-1 text-blue-900  font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Recipes</Link>
                            <Link to="contact" className='flex-1 text-blue-900 font-semibold w-100% px-3 border-b-4 border-transparent hover:text-yellow-500 '>Contacts</Link>

                        </nav>
                        <div className="relative mr-3">
                            <Link to="cart" className='block'>

                                <GiShoppingCart
                                    className='text-5xl text-black cursor-pointer hover:text-yellow-500'

                                />

                                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{state.cartItems.length}</span>
                            </Link>


                        </div>

                    </div>
                }




            </header>

            {sidebar && (
                <div
                    id={`sidebar ${sidebar ? 'open' : ''}`}
                    className={`fixed flex justify-between flex-col p-2 top-0 h-[70%] w-full bg-gray-200 z-50 overflow-hidden transform ${sidebar ? 'animate-bounceIn' : 'animate-bounceOut'}`}
                >

                    <div className='top-[10px] py-7 px-5  flex justify-between flex-row items-center'>
                        <p
                            id='header'
                            className='text-4xl text-yellow-500'><span className='text-extrabold'>Fralon</span>Peanuts</p>
                        <IoChevronBack
                            onClick={closeSidebar}
                            className='text-2xl bg-red-400 my-auto text-white text-center h-[2rem] w-[2rem] font-bold hover:bg-red-300 rounded-md'
                        />
                    </div>

                    <div className='flex justify-center flex-col gap-10'>
                        <Link to="cart" className='block p-2'>

                            <GiShoppingCart
                                className='text-5xl text-black cursor-pointer hover:text-yellow-500'

                            />
                        </Link>
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

                </div>

            )
            }


        </div>

    )
}

export default Header