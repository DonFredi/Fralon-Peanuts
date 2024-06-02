import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
import ImageSlider from "./ImageSlider";
import Board from '../assets/pbonboard.jpg';
import Roast from '../assets/roast.jpg';
import Client2 from '../assets/client2.jpg';
import Spoon from '../assets/pbspoon.jpg';


const About = () => {

    return (
        <div className="px-3">

            <div className='w-[100%] p-3 flex justify-start flex-row mb-9 gap-x-2'>


                <div className=" flex justify-center flex-col items-center py-3 ">

                    <h2 className='   text-4xl text-yellow-400 font-bold font-serif text-center mb-8'>Delicious Peanuts for every Occassion</h2>
                    <div className="flex justify-center items-center flex-col px-8 md:justify-start">
                        <p className=" mb-6 text-center">Our peanuts are carefully selected, roasted to perfection, and packed with nutrients.Whether you're looking for a healthy snack or versatile ingredient, Fralon Peanuts has you covered.</p>

                        <div className="flex flex-row gap-x-6 justify-center">
                            <Link to="cart"
                                className="p-3 text-center text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white ">Shop Now</Link>

                        </div>
                    </div>
                </div>
            </div>


            <div
                className="my-10 flex flex-col p-3"
            ><ImageSlider /></div>



            <article
                id="article"
                className="flex justify-evenly flex-row py-6 px-2 my-5">
                <div className="flex justify-start flex-col p-5 items-center w-[100%]">
                    <h2 className="text-center text-3xl font-bold text-yellow-400 my-9 flex-nowrap">Discover the Delicious Variety  of Peanut Products at Fralon Peanuts</h2>
                    <p className="text-left ">At Fralon Peanuts, we offer a wide range of peanut products, including peanut butter, roasted peanuts, and ground peanuts. Our products are made with the highest quality peanuts and are packed with flavor and nutrition. Whether you're looking for a tasty snack or a versatile ingredient for your recipes, we have the perfect peanut product for you.</p>

                </div>
                <div className="flex justify-center items-center w-[100%] p-6">
                    <img src={Board} alt="pbon board"
                    />
                </div>
            </article>

            <section className="flex justify-around flex-wrap mt-[80px] flex-col mb-4 gap-x-3 px-2">
                <div className="flex justify-center flex-col items-center gap-y-6 mb-6">
                    <h3 className="text-2xl font-bold text-yellow-400">Delicious and Nutritious Peanut Products</h3>
                    <p>Discover the natural ingredients, health benefits, and local sourcing behind our premium peanut products.</p>
                    <div className="flex items-center gap-x-4">
                        <Link className="px-3 py-2 bg-slate-100 border-black border-2 hover:bg-slate-200">Learn More</Link>
                        <Link
                            to='/cart'
                            className=" p-2 hover:underline">Shop Now</Link>
                    </div>
                </div>

                <div className="flex justify-center flex-col gap-y-6 items-center">
                    <h3 className="text-2xl font-bold text-yellow-400">Support Local Farmers and Enjoy Freshness</h3>
                    <p>By choosing Fralon Peanuts, you're supporting local farmers and ensuring the freshest peanuts in every jar.</p>
                    <div className="flex items-center gap-x-4">
                        <Link className="px-3 py-2 bg-slate-100 border-black border-2 hover:bg-slate-200">Learn More</Link>
                        <Link
                            to='/cart'
                            className=" p-2 hover:underline">Shop Now</Link>
                    </div>
                </div>
            </section>
            <section
                id="section"
                className="flex justify-evenly flex-row gap-x-3 mt-[100px] py-9 ">
                <div className="py-5 flex justify-center flex-col p-3 w-[100%]">
                    <img src={Roast} alt="roasted"
                        className="h-[550px]"
                    />
                </div>


                <div className="p-3" >
                    <h3 className="font-bold text-2xl my-4 text-yellow-400 mt-[80px]">Discover the Health Benefits of Fralon Peanuts' Nutritious Products</h3>
                    <p>At Fralon Peanuts, we offer a range of delicious and nutritious peanut products that provide numerous health benefits. Our peanuts are packed with essential nutrients, making them a great addition to a balanced diet.</p>

                    <div className="flex justify-start flex-row mt-7 gap-x-9 p-3">
                        <div className="flex justify-center flex-col">
                            <h2 className="font-bold text-2xl p-3">Rich In</h2>
                            <p>protein, fiber, and healthy fats, our peanuts promote heart health, aid in weight management, and support digestion.</p>
                        </div>
                        <div className="flex justify-center flex-col">
                            <h2 className="font-bold text-2xl p-3">Boost your</h2>
                            <p>immune system with the antioxidant properties of our peanuts, which help fight off harmful free radicals.</p>

                        </div>
                    </div>
                </div>
            </section>
            <div
                id="testimonials"
                className="py-6 px-3 mx-4 mt-[130px] flex justify-start flex-col gap-x-6  md:flex-row">
                <div className="h-[50%] w-full">
                    <img src={Client2} alt="placeholder"
                        className="w-[100%] h-full"
                    />
                </div>

                <div className="flex justify-center flex-col gap-y-5 p-7 md:justify-center">
                    <div className="flex justify-start flex-row gap-x-2 text-3xl text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className="text-lg font-light">I absolutely love Fralon Peanuts! They have the best peanut butter I've ever tasted. Highly recommend!</p>
                    <div>
                        <p>Jane Smith</p>
                        <p>Freelancer</p>
                    </div>
                </div>
            </div>

            <section className="flex justify-between flex-col mt-[40px] p-6 gap-x-3 items-center md:flex-row">
                <div className="flex justify-between flex-col md:w-[50%] w-[100%]">
                    <div  >
                        <h2 className="font-bold text-3xl text-yellow-400 mt-[60px]">Discover Our Peanut Products</h2>
                        <p className="py-4">Explore our wide range of delicious peanut products, perfect for any occasion.Our shop is stocked with an assortment of mouthwatering options, ranging from classic creamy peanut butter to gourmet peanut-infused treats.</p>
                    </div>
                    <div className="flex justify-start flex-row">
                        <Link
                            to='/cart'
                            className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white mr-4">Shop</Link>
                        <Link className="p-2 bg-slate-100 text-black border-2 border-black hover:bg-slate-200">Learn More</Link>

                    </div>
                </div>
                <div className=" flex justify-center p-3 mt-8 md:w-[50%] w-[100%] h-[500px]">
                    <img src={Spoon} alt="pbon spoon"
                    />
                </div>
            </section>
            <section className="p-6 flex justify-center flex-col gap-y-8 mt-[100px]">
                <h3 className="text-center text-yellow-400 font-bold text-3xl">Frequently Asked Questions</h3>
                <p className="text-center">Find answers to common questions about peanuts, allergen information, and product storage.</p>
                <Link
                    className="flex justify-center flex-col gap-y-5 text-center border-2 p-9 hover:bg-slate-100">
                    <h4 className="font-bold">Are peanuts gluten-free?</h4>
                    <p className="text-blue-400">Yes, peanuts are naturally gluten-free. However, cross-contamination can occur during processing, so it's important to check the labels for any potential gluten-containing ingredients.</p>
                </Link>
                <Link className="flex jusztify-center flex-col gap-y-5 text-center border-2 p-9 hover:bg-slate-100">
                    <h4 className="font-bold">Are peanuts tree nuts?</h4>
                    <p className="text-blue-400">No, peanuts are legumes, not tree nuts. However, individuals with peanut allergies may also be allergic to tree nuts, so it's important to consult with a healthcare professional if you have any concerns.</p>
                </Link>
                <Link className="flex justify-center flex-col gap-y-5 text-center border-2 p-9 hover:bg-slate-100">
                    <h4 className="font-bold">How should I store peanuts?</h4>
                    <p className="text-blue-400">Peanuts should be stored in a cool, dry place, away from direct sunlight and moisture. It's best to keep them in an airtight container to maintain freshness and prevent them from absorbing odors.</p>

                </Link>
                <Link className="flex justify-center flex-col gap-y-5 text-center border-2 p-9 hover:bg-slate-100">
                    <h4 className="font-bold">Can I eat raw peanuts?</h4>
                    <p className="text-blue-400">Raw peanuts can be consumed, but they are often roasted or cooked to enhance their flavor and texture. Roasting also helps to remove any potential harmful bacteria.</p>
                </Link>
                <Link className="flex justify-center flex-col gap-y-5 text-center border-2 p-9 hover:bg-slate-100">
                    <h4 className="font-bold">Are peanuts a healthy snack?</h4>
                    <p className="text-blue-400">Yes, peanuts are a nutritious snack option. They are a good source of protein, healthy fats, fiber, and various vitamins and minerals. However, portion control is important as they are calorie-dense.</p>
                </Link>
                <h3 className="text-center font-semibold">Still have questions?</h3>
                <p className="text-center">Contact us for further assistance</p>
                <Link to="contact"
                    className=" flex justify-center items-center text-center px-4 py-3 bg-blue-500 text-white w-[70px] m-auto hover:bg-blue-600 rounded-lg" >Contact</Link>
            </section>
        </div>
    )
}

export default About