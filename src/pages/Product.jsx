import React from 'react'
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from './DataContext';
import { IoArrowBackOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Product = () => {

    const { productId } = useParams();
    const { state, handleCart } = useContext(DataContext)
    const paramItem = state.products.find(item => item.id === parseInt(productId));


    return (
        <div className='flex flex-col justify-start mb-[200px] p-6'>
            <Link
                className=' bg-blue-600 w-[50px] p-3  hover:bg-blue-500 text-white'
                to='/products'> <IoArrowBackOutline /> </Link>

            <div className='flex flex-col justify-evenly md:flex-row  px-6'>
                <div className='flex justify-center w-[100%] md:w-[50%] items-center'>
                    <img
                        className='p-3 h-[300px]'
                        src={paramItem.src} alt={paramItem.title.item} />
                </div>
                <div className='w-[100%] md:w-[50%] mt-4'>

                    <p className='text-xl font-bold text-yellow-400'> TYPE : {paramItem.title.item}</p>
                    <p className='text-xl font-bold text-yellow-400'> WEIGHT : {paramItem.title.weight}</p>
                    <p className='text-xl  font-semibold text-yellow-400'> PRICE : Kshs {paramItem.title.price}/=</p>
                    <p className='mt-4 text-l'>{paramItem.details}</p>
                    <div className='mt-8 flex flex-row justify-between items-center'>
                        <Link
                            onClick={() => handleCart(paramItem.id)}
                            className='bg-blue-600 hover:bg-blue-500 px-8 py-3 text-white '>ADD TO CART</Link>
                        <div className='bg-blue-600 hover:bg-blue-500 p-3 text-2xl text-bold text-white'><CiHeart /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product