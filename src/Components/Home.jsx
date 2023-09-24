import React from 'react'
import NavBar from '../Components/Navbar'

const Home = () => {
    return (
        <div className='w-full h-screen bg-black'>

            {/*Container */}
            <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
                <h1 className='text-6xl'>Laurence Bartram</h1>
                <h2 className='text-2xl text-teal-300'>IT Consultant | Computer Science Major</h2>
                <div className=' bg-slate-500 px-4 bottom-[50%]'>
                    <p className = 'text-lg text-black'>Heya! I'm a rising Senior studing Computer Science at Rutgers University.</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Home