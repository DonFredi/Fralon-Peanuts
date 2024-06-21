import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DataContext from './DataContext';
import Place from "../assets/place.jpeg";
import Client1 from "../assets/client1.jpg";
import Roast from "../assets/roast.jpg";


import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Products = () => {
    const [index, setIndex] = useState(0);
    const [type, setType] = useState(null);
    const { state } = useContext(DataContext);

    const smooth = { smooth: 'Smooth peanut butter for all' }
    const crunchy = { crunchy: 'Crunchy peanut butter for you' }
    const organic = { organic: 'This is the organic peanut butter' }


    const handleSmooth = () => {
        setType(smooth.smooth);
    }
    const handleCrunchy = () => {
        setType(crunchy.crunchy);
    }
    const handleOrganic = () => {
        setType(organic.organic);
    }

    const handleNext = () => {

        setIndex((prevIndex) => (prevIndex + 1) % state.products.length)
    }

    const handlePrevious = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? state.recipes.length - 1 : prevIndex - 1
        );
    }

    const product = state.products[index];
    const isFirstProduct = index === 0;
    const isLastProduct = index === state.products.length - 1;


    return (
        <div className='p-3'>
            <h2 className="text-center text-3xl text-yellow-400 font-bold my-4">Experience Delicious Fralon Products</h2>
            <article className='flex flex-col items-center justify-start md:flex-row'>
                <div className='flex flex-col md:w-[50%] w-[100%] '>
                    <div className='flex justify-around flex-row items-center border-black border-2 py-6'>

                        <button
                            disabled={isFirstProduct}
                            onClick={handlePrevious}
                            className={`bg-slate-200 p-4 rounded-full ${isFirstProduct ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <FaArrowLeft

                            />
                        </button>


                        <div className='flex  justify-center p-3'>

                            <img className='w-fit h-[500px]' src={product.src} alt={product.src} />
                        </div>


                        <button
                            onClick={handleNext}
                            disabled={isLastProduct}
                            className={`bg-slate-200 p-4 rounded-full ${isLastProduct ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <FaArrowRight
                            />
                        </button>

                    </div>

                    <p className='mt-6 p-3 text-center'>( {index + 1} / {state.products.length} )</p>
                </div>
                <div className='w-full md:w-1/2 p-6 text-left'>
                    <h1 className='text-left text-yellow-400 font-bold text-2xl p-3'>Fralon Peanut Butter</h1>

                    <div className="flex justify-start flex-row gap-x-2 text-3xl text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className='text-black text-lg'>(5 stars) . 15 reviews</p>
                    </div>
                    <p className='my-4'>Our delicious Peanut Butter is made from the finest quality peanuts, providing a rich and creamy taste that will satisfy your cravings.</p>

                    <p> Type</p>


                    <div className='my-7 gap-x-4 flex justify-start flex-row'>
                        <button
                            onClick={handleSmooth}
                            className='px-3 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600'>Smooth Texture</button>
                        <button
                            onClick={handleCrunchy}
                            className='px-3 py-2 bg-slate-400 text-white font-semibold hover:bg-blue-600'>Crunchy Texture</button>
                        <button
                            onClick={handleOrganic}
                            className='px-3 py-2 bg-slate-400 text-white font-semibold hover:bg-blue-600'>Organic Option</button>

                    </div>
                    {type && (
                        <p>{type}</p>
                    )}
                    <div className=' my-6 w-full flex-col gap-y-3'>
                        <Link
                            className='block bg-blue-600 text-white text-center mb-4 p-2 hover:bg-blue-500'>Buy Now</Link>


                    </div>

                    <hr />
                    <h2 className='font-semibold text-xl my-4'>Details</h2>
                    <p>Our Peanut Butter is made with 100% natural ingredients and contains no added preservatives. It is a great source of protein and healthy fats.</p>
                    <hr />
                    <h2 className='font-semibold text-xl my-4'>Shipping</h2>
                    <p>We offer fast and reliable shipping options to ensure that you receive your Peanut Butter in perfect condition.</p>
                    <hr />
                    <h2 className='font-semibold text-xl my-4'>Returns</h2>
                    <p>If you are not completely satisfied with your purchase, please contact our customer service team for assistance.</p>


                </div>

            </article>

            <section className='mt-[70px] p-5'>
                <h3 className='text-center py-3'>Delicious</h3>
                <h2 className='py-3 text-3xl text-yellow-400 font-bold font-serif text-center mb-2'>Products</h2>

                <p className='text-center'>Discover our wide range of peanut products, including raw peanuts, roasted peanuts, and peanut butter.</p>

                <div className=' w-[100%] flex justify-around items-center flex-row gap-x-4 mt-9 flex-wrap'>

                    {state.products.map((item) => (
                        <Link
                            to={`/product/${item.id}`}
                            className='flex items-center justify-start flex-col text-center py-6 mt-6 px-7 gap-y-3 hover:bg-yellow-400 rounded-lg' >
                            <img
                                className='w-fit h-[200px]'
                                src={item.src} alt={item.title.details} />
                            <p className='text-lg font-semibold'>{item.title.item}</p>
                            <p className='text-lg font-semibold'>Price: {item.title.price} Kshs</p>
                        </Link>


                    ))}



                </div>

            </section>
            <section className='mt-[100px] flex justify-start items-center flex-col gap-x-5 p-6'>
                <div className='text-center py-4'>
                    <h3 className='text-center py-3'>Nutritious</h3>
                    <h2 className='text-3xl font-bold text-yellow-400 mb-4 text-center py-3'>Discover the Nutritional Benefits of Peanuts</h2>
                    <p>Peanuts and peanut products are packed with essential nutrients and offer numerous health benefits. They are a great source of protein, fiber, healthy fats, and vitamins, making them a nutritious addition to your diet.</p>
                    <div className='mt-3 flex flex-row justify-center'>
                        <Link className="p-2 bg-slate-100 border-black border-2 hover:bg-slate-200">Learn More</Link>
                        <Link
                            to="/cart"
                            className='p-3 hover:underline'>Shop Now</Link>
                    </div>

                </div>

                <div className='flex justify-start gap-x-4 flex-row mt-6 p-3'>
                    <div className='w-[50%] flex flex-col justify-center bg-slate-100 border-black border-2 p-2'>
                        <h3 className='text-xl font-semibold'>Quality Proteins</h3>
                        <p className='text-2xl font-bold'>50%</p>
                        <hr />
                        <p>Peanuts are rich in high-quality plant-based protein.</p>
                    </div>
                    <div className='w-[50%] flex flex-col justify-center bg-slate-100 border-black border-2 p-2'>
                        <h3 className='text-xl font-semibold'>Healthy Fats</h3>
                        <p className='text-2xl font-bold'>50%</p>
                        <hr />
                        <p>The healthy fats in peanuts promote heart health.</p>
                    </div>
                </div>

            </section>
            <section className='flex justify-start md:flex-row flex-col gap-x-6 p-3 items-center mt-[80px]'>
                <div className='flex flex-col gap-y-4'>
                    <h3 className='text-center py-3'>Delicious</h3>
                    <h2 className='text-2xl font-bold text-yellow-400 text-center py-3'>Boost Your Health with Fralon Peanuts</h2>
                    <p>Incorporating Fralon Peanuts into your diet can provide numerous health benefits. Packed with essential nutrients and antioxidants, these peanuts can help improve heart health, boost brain function, and support weight management.</p>
                    <div className='flex flex-row gap-x-3 py-2 mb-20'>
                        <Link className=" p-2 bg-slate-100 border-black border-2 hover:bg-slate-200">Learn More</Link>
                        <Link
                            to="/cart"
                            className='p-3 hover:underline'>Shop Now</Link>

                    </div>

                </div>
                <img src={Place} alt="place holder"
                    className='px-4'
                />
            </section>
            <article className='flex flex-col p-6 mt-[100px] items-center gap-y-5'>
                <div className="flex justify-start flex-row gap-x-2 text-3xl text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p>The Fralon peanuts are absolutely delicious! I can't get enough of them.</p>
                <div className='flex justify-start flex-row gap-x-3 items-center'>
                    <img src={Client1} alt="place holder"
                        className='w-[48px] h-[48px] rounded-full'
                    />
                    <p>Lillian M.|</p>
                    <p>Food Critic, Tasty Times</p>
                </div>

            </article>
            <section className="hover:opacity-80 bg-cover bg-center mt-[100px]" style={{
                backgroundImage: `url(${Roast})`
            }}>
                <div className="bg-black bg-opacity-50 p-9 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Discover Our Delicious Peanut Products</h3>
                    <p className="text-lg mb-6">Indulge in the Irresistible Taste of Fralon Peanut Butter</p>
                    <div className="flex space-x-4 justify-center">
                        <Link
                            to='/cart'
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Shop</Link>
                        <Link className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Explore</Link>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Products;



