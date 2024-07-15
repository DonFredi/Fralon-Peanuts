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
import Client1 from '../assets/client1.jpg';
import MapIframe from "../components/MapIframe";


const Contact = () => {


    return (
        <div
            id="contact"
            className='flex flex-col justify-start py-4'>
            <h2 className="text-center text-3xl text-yellow-400 font-bold p-4">Get in touch with Fralon</h2>
            <section className="px-4 py-2">
                <p className="text-center py-2">Delicious</p>
                <h2 className="text-3xl font-bold text-yellow-400 text-center py-3 mb-4">Contact Information</h2>
                <p className="text-center">We'd love to hear from you. Reach out to us using any of the methods below.</p>

                <div className="flex justify-evenly w-[100%] flex-col md:flex-row p-3 mt-8">
                    <div className="flex justify-start flex-col p-3 w-[100%] md:w-[50%] items-center">

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

                        <h3 className="text-lg font-semibold mt-3">Location</h3>
                        <CiLocationOn
                            className="text-2xl my-2"
                        />
                        <p>Nairobi, Kenya</p>
                        <Link className="underline hover:no-underline"> Get Directions </Link>
                    </div>
                    < Form />

                </div>


            </section>

            <section className='text-center mb-8 flex justify-start flex-col items-center mt-[70px]'>


            </section>

            <section className='flex  justify-evenly flex-col items-center mt-[50px] p-2'>
                <div>
                    <p className="text-center ">Delicious</p>
                    <h2 className='text-center text-yellow-400 font-bold text-3xl p-2 my-4'>Get in touch</h2>
                    <p className="text-center my-3 ">Find our location near you and discover our delicious peanut products.</p>
                </div>
                <div className="flex md:flex-row flex-col md:justify-around w-[100%] items-center border-yellow-400 border-[3px] rounded-lg">
                    <div className="flex flex-col p-4 justify-start">
                        <h3 className="text-center mb-5 text-2xl">Business Hours :</h3>
                        <p className="mb-5 text-xl">Monday - Friday: 8am - 7:30pm</p>
                        <p className="mb-5 text-xl">Saturday : 8:30am - 7:30pm</p>
                        <p className="mb-5 text-xl">Sunday - Closed</p>

                    </div>

                    <div className="p-4 flex flex-col justify-start text-left">
                        <h3 className="text-center mb-5 text-2xl">Socials : </h3>
                        <Link className=' mb-5 text-xl flex flex-row justify-start items-center hover:text-yellow-500 gap-2 ' to='www.facebook.com'>
                            <FaFacebookSquare
                            />
                            Facebook</Link>

                        <Link className='mb-5 text-xl flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.instagram.com">
                            <FaInstagram />
                            Instagram</Link>

                        <Link className='mb-5 text-xl flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.x.com"> <BsTwitterX
                            className="texl-4xl"
                        />
                            X</Link>
                        <Link className='mb-5 text-xl flex flex-row  justify-start items-center hover:text-yellow-500 gap-2' to="www.snapchat.com">
                            <FaSnapchatSquare
                            />Snapchat</Link>
                        <Link className='text-xl flex flex-row justify-start items-center hover:text-yellow-400 gap-2 ' to="www.tiktok.com">
                            <FaTiktok
                                className=" hover:text-yellow-500"
                            />
                            Tiktok</Link>
                    </div>
                </div>

            </section>

            <MapIframe />

            <article className=" p-5 flex gap-4 justify-center items-center flex-col ">

                <p>Delicious</p>
                <h2 className="text-3xl font-bold text-yellow-400">Our amazing team</h2>
                <p>Meet the talented individuals behind Fralon Peanuts.</p>

                <div className="flex md:flex-row flex-col p-8 gap-y-5">
                    <div className="items-center flex flex-col text-center">

                        <img src={Client1} alt="clients" className="w-[68px] h-[68px] mb-2 rounded-full" />
                        <div className="flex flex-col">
                            <p>Eugene O.</p>
                            <p>Designer</p>
                            <p>John is the visionary leader behind Fralon Peanuts, driving innovation and growth.</p>

                        </div>
                    </div>

                    <div className="items-center flex flex-col text-center">

                        <img src={Client1} alt="clients" className="w-[68px] h-[68px] mb-2 rounded-full" />
                        <div>
                            <p>Brenda K.</p>
                            <p>Co Founder</p>
                            <p>Jane is passionate about technology and leads our technical team with precision.</p>

                        </div>
                    </div>

                    <div className="items-center flex flex-col text-center">

                        <img src={Client1} alt="clients" className="w-[68px] h-[68px] mb-2 rounded-full" />
                        <div>
                            <p>Michelle A.</p>
                            <p>Marketing Director</p>
                            <p>Michael is dedicated to creating impactful marketing campaigns that resonate with clients.</p>

                        </div>
                    </div>

                    <div className="items-center flex flex-col text-center">

                        <img src={Client1} alt="clients" className="w-[68px] h-[68px] mb-2 rounded-full" />
                        <div>
                            <p>Emily J.</p>
                            <p>Design Lead</p>
                            <p>Emily brings creativity and innovation to every design project, ensuring our brand stands out.</p>

                        </div>
                    </div>



                </div>



            </article>



        </div >
    )
}

export default Contact