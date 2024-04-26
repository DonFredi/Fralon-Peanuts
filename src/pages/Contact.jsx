import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Form from "./Form";

import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci"
import { Link } from 'react-router-dom';



const Contact = () => {


    return (
        <div className='flex flex-col justify-center'>
            <h2 className="text-center text-3xl text-yellow-400 font-bold p-6">Get in touch with Fralon</h2>
            <section className="p-3 mb-9 ml-4">
                <p className="text-left">Delicious</p>
                <h2 className="text-3xl font-bold text-yellow-400 text-left my-2">Contact Information</h2>
                <p className="text-left">We'd love to hear from you. Reach out to us using any of the methods below.</p>

                <div className="flex justify-between flex-col p-4 md:flex-row mt-8 items-center">
                    <div className="flex justify-start flex-col flex-wrap p-">

                        <h3 className="text-lg font-semibold mt-3">Email</h3>
                        <CiMail
                            className="text-2xl my-2"
                        />
                        <p>Send us an email</p>
                        <Link>Fralonpeanuts@gmail.com</Link>

                        <h3 className="text-lg font-semibold mt-3">Phone</h3>
                        <FiPhone
                            className="text-2xl my-2"
                        />
                        <p>Give us a call</p>
                        <p>0702106704</p>

                        <h3 className="text-lg font-semibold mt-3">Office</h3>
                        <CiLocationOn
                            className="text-2xl my-2"
                        />
                        <p>Nairobi, Kenya</p>
                        <p>Get Directions </p>
                    </div>
                    <div className="mt-6 flex items-center">
                        <img src="src/assets/agent.jpg" alt="customer service agents"

                        />
                    </div>

                </div>


            </section>


            <p className="ml-6">Fresh</p>
            <h2 className='text-3xl text-yellow-400 font-bold font-sans ml-5 my-2'>Get in touch</h2>
            <section className='text-center font-sans p-4 mb-8'>
                <p className="text-left mb-3 ml-1">Have a question or need assistance? We're here to help!</p>
                < Form />


            </section>

            <section className='flex  justify-evenly  flex-row gap-x-9'>
                <div className="flex justify-start flex-col p-3">
                    <p className="text-left ml-3">Delicious</p>
                    <h2 className='text-left text-yellow-400 font-bold text-3xl p-2 my-2'>Get in touch</h2>
                    <p className="ml-3">Find our location near you and discover our delicious peanut products.</p>
                </div>
                <div className="p-10 mr-8">
                    <Link className=' mb-5 text-lg text-center flex flex-row justify-start items-center hover:text-yellow-500 gap-2 ' to='www.facebook.com'>
                        <FaFacebookSquare
                        />
                        Facebook</Link>

                    <Link className='mb-5 text-lg text-center flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.instagram.com">
                        <FaInstagram />
                        Instagram</Link>

                    <Link className='mb-5 text-lg text-center flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.x.com"> <BsTwitterX
                        className="texl-4xl"
                    />
                        X</Link>
                    <Link className='mb-5 text-lg text-center flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.snapchat.com">
                        <FaSnapchatSquare
                        />Snapchat</Link>
                    <Link className='text-lg text-center flex flex-row justify-start items-center hover:text-yellow-400 gap-2 ' to="www.tiktok.com">
                        <FaTiktok
                            className="hover:text-yellow-500"
                        />
                        Tiktok</Link>
                </div>
            </section>

            <section className=" p-3 flex flex-col w-[100%]">
                <img src="src/assets/map.jpeg" alt="maps"
                    className="h-[500px]"
                />
            </section>

            <article className=" p-5 flex gap-4 justify-center items-center flex-col ">

                <p>Delicious</p>
                <h2 className="text-3xl font-bold text-yellow-400">Our amazing team</h2>
                <p>Meet the talented individuals behind Fralon Peanuts.</p>

                <div className="flex flex-wrap justify-between p-4">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                            <img src="src/assets/client1.jpg" alt="clients" className="w-full mb-2 rounded-md h-fit" />
                            <p>Jane Doe</p>
                            <p>CEO & Founder</p>
                            <p>John is the visionary leader behind Fralon Peanuts, driving innovation and growth.</p>
                            <div
                                className="flex flex-row justify-center gap-x-4 p-3 text-xl"
                            >
                                <BsTwitterX />
                                <FaInstagram />
                                <FaFacebookSquare />

                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 text-center">
                        <div className="bg-white rounded-lg p-4 text-center">
                            <img src="src/assets/client2.jpg" alt="clients" className="w-full mb-2 rounded-md" />
                            <p>Brenda</p>
                            <p>Co Founder</p>
                            <p>Jane is passionate about technology and leads our technical team with precision.</p>
                            <div
                                className="flex flex-row justify-center gap-x-4 p-3 text-xl"
                            >
                                <BsTwitterX />
                                <FaInstagram />
                                <FaFacebookSquare />

                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                            <img src="src/assets/client3.jpg" alt="clients" className="w-full mb-2 rounded-md" />
                            <p>Michael Smith</p>
                            <p>Marketing Director</p>
                            <p>Michael is dedicated to creating impactful marketing campaigns that resonate with clients.</p>
                            <div
                                className="flex flex-row justify-center gap-x-4 p-3 text-xl"
                            >
                                <BsTwitterX />
                                <FaInstagram />
                                <FaFacebookSquare />

                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 text-center">
                        <div className="bg-white rounded-lg p-4 text-center">
                            <img src="src/assets/client1.jpg" alt="clients" className="w-full mb-2 rounded-md" />
                            <p>Emily Johnson</p>
                            <p>Design Lead</p>
                            <p>Emily brings creativity and innovation to every design project, ensuring our brand stands out.</p>
                            <div
                                className="flex flex-row justify-center gap-x-4 p-3 text-xl"
                            >
                                <BsTwitterX />
                                <FaInstagram />
                                <FaFacebookSquare />

                            </div>
                        </div>
                    </div>



                </div>



            </article>



        </div >
    )
}

export default Contact