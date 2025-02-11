import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <hr />

    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='items-center justify-center flex flex-col'>
                <div className='flex space-x-4'>
                    <FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; 2025 Your Company. All rights reserved.</p>
                    <p className='text-sm'>Supporting Partner ❤️ CodeForIndia</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer