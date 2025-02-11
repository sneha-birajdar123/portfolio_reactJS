import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";
import image from "../../public/photo.avif"



const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 '>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={[" Developer", " Programmer", " Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div><br />
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vero debitis modi doloribus tempore consequatur dolorum deleniti
                            dolor inventore ab dolores esse animi libero ut, perspiciatis perferendis
                            sapiente, vitae minus fugiat. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Iusto suscipit quas quibusdam illo, molestias eius. Placeat q
                            uod ea aliquid architecto, soluta porro ullam ad nulla, dolorem totam expedita
                            incidunt earum.
                        </p><br />


                        {/* social media icons */}

                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className=' space-y-2'>
                                <h1 className='font-bold '>Available On</h1>
                                <ul className='flex space-x-5 '>
                                    <li >
                                        <a href="https://www.facebook.com" target='_blank'>
                                            <FaSquareFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com" target='_blank'>
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com" target='_blank'>
                                            <FaInstagramSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <div className='flex space-x-5 '>
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full' />
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2   md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={image} className='rounded-full w-[500px] h-[450px]' alt="" />
                    </div>
                </div>
            </div>
            <hr className='border-0.1' />
        </>
    )
}

export default Home