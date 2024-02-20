import React from 'react'
import java from '../assets/Java-Emblem.jpg'
import reactlogo from '../logo.svg'
import pythonlogo from '../assets/Python-logo-notext.svg.png'

const Skills = () => {
    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            <h1 className='flex justify-center text-3xl px-10'>Skills</h1>
            <div className='px-6 pb-6'>
                <div className=" content-center container mx-auto grid grid-cols-3 pt-6 gap-8">
                    <div className="rounded border-gray-300 dark:border-gray-700 border">
                        <h2 className='flex justify-center text-1xl'>Java</h2>
                        <img src={java} alt="java-logo" className='w-full'></img>
                    </div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2">
                        <h2 className='flex justify-center text-1xl'>React.js</h2>
                        <img src={reactlogo} alt="react-logo" className='w-full'></img>
                    </div>
                    <div className="justify-center rounded border-gray-300 dark:border-gray-700 border-dashed border-2">
                    <h2 className='flex justify-center text-1xl'>Python</h2>
                        <img src={pythonlogo} alt="python-logo" className='w-[75%]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;