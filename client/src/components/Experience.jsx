import React from 'react'
import mongodb from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import react from "../../public/react.png"
import node from "../../public/node.png"

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: react,
            name: "ReactJS"
        },{
            id: 4,
            logo: node,
            name: "NodeJS" 
        }
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p className='font-semibold'>
            I'm a fresher in below Technologies
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-5'>
            {cardItem.map(({id, logo, name}) => (
                    <div className='flex flex-col items-center shadow-2xl justify-center rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                         <img className='w-[150px] rounded-full' src={logo} alt="" />
                         <div>
                            <div className=''>{name}</div>
                         </div>
                         
                    </div>
                ))}
        </div>
        </div>
    </div>
  )
}

export default Experience