import React from 'react'
import photo from '../assets/headshot cropped.jpg'

const Home = () => {
    return (
        <div className='w-full h-screen bg-black'>

            {/*Container */}
            <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
                <img src={photo} alt="photo" style={{width: '100px'}}></img>
                <h1 className='text-6xl'>Laurence Bartram</h1>
                <h2 className='text-2xl text-teal-300'>IT Consultant | Computer Science Major</h2>
                <div className=' bg-slate-500 px-4 bottom-[50%]'>
                    <p className = 'text-lg text-black'>Senior finishing my Bachelors of Science at Rutgers University.</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Home