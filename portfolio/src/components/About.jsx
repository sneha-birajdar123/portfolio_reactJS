import React from 'react'

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
            Hello, I'm Sneha, a passionate Web Developer with a keen eye for MERN 
            Stack. With a background in IT, I strive to create impactful and visually
            stunning Software solutions that leave a lasting impressions.
        </p>
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
        <span>[Degree/Certification], [Institution], [Year],
             [Degree/Certification], [Institution], [Year],
             [Relevant Course], [Platform/Institution], [Year] 
        </span>
        <br /><br />
        <h1 className='text-green-600 font-semibold text-xl'>Skills & Experties</h1>
        <span>
            Proficient in [Programming Languages] Experienced with [Software Tools/Technologies]
            Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective
            commucator and collaborator
        </span>

        <br /><br />
        <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
        <span>
            [Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]
        </span>

        <br /><br />
        <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
        <p>
            My mission is to leverge my skills and creativity innovative [Year Field] solutions that 
            exceed client expectations and contribute positivity to the digital landscape. I am commited
            to continuous learning and growth, always seeking new challenges and opportunities to expand 
            my horizons.
        </p>
        </div>
    </div>
  )
}

export default About