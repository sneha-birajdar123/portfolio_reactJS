import React, { useState } from 'react'
import image from "../../public/myimage.jpeg"
import { AiOutlineMenu } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"

const Navbar = () => {
    const [menu, setmenu] = useState(false)

    const nabItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-blue-200 '>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={image} className='h-12 w-13 rounded-full' alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Sneh<span className='text-blue-500 text-2xl'>a</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>

                    {/* desktop navbar */}

                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {nabItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setmenu(!menu)} className='md:hidden'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* mobile */}
                {
                    menu && (
                        <div className='bg-blue-300'>
                            <ul className='md:hidden flex-col h-screen items-center justify-center space-y-4 text-xl'>
                                {nabItems.map(({ id, text }) => (
                                    <li onClick={() => setmenu(!menu)} className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Navbar