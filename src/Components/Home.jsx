import React from 'react'
import photo from '../assets/headshot cropped.jpg'
import HackRU from '../assets/HackIMG.png'
import RUIT from '../assets/RUIT.png'
import UWRC from '../assets/URWCLogo.png'

const Home = () => {
    return (
        <div className='w-full h-screen pt-20 bg-black overflow-auto'>

            {/*Container */}
            <div className='h-full mx-auto px-8 flex flex-row justify-center items-center p-10'>

                <div className='px-10'>
                    <img className='object-cover rounded-full w-96 h-96' src={photo} alt="photo"  ></img>
                </div>
                
                <div className='flex flex-col justify-center'>
                    <h1 className='text-6xl'>Laurence Bartram</h1>
                    <h2 className='text-2xl text-white'>IT Consultant | Computer Science Major</h2>
                    <p className = 'text-lg text-white'>I am a Senior finishing up my Bachelors of Science degree at Rutgers University - New Brunswick</p>
                    <p className='text-lg pt-10'>Welcome! My website aims to showcase some of my software development skills, projects, and fun facts about me.</p>
                    
                </div>
                
                
                
            </div>
            <div className='flex-col flex items-center justify-center p-10'>
                <h1 className='text-4xl p-4'>About Me</h1>
                <div className='grid grid-cols-12 gap-6 mx-auto'>
                    <div className='col-span-12 bg-white rounded hover:shadow-md hover:shadow-slate-500 '>
                        <div className='w-fit h-full bg-white rounded drop-shadow-lg px-2 flex justify-center items-center'>
                            <img className="object-fit rounded-full h-16 w-20" src={RUIT} alt="oit-img"></img>
                            <p className='text-lg text-black'>Employee at the Rutgers IT Help Desk for 2+ years</p>
                        </div>
                    </div>

                    <div className='col-span-12 bg-white rounded hover:shadow-md hover:shadow-slate-500'>
                        <div className='w-fit h-full bg-white rounded drop-shadow-lg px-2 flex justify-center items-center'>
                            <img className="object-cover rounded-full h-16 w-16" src={HackRU} alt="hackru-img"></img>
                            <p className='text-lg text-black'>Attended HackRU 2023 this past October</p>
                        </div>
                    </div>

                    <div className='col-span-12 bg-white rounded hover:shadow-md hover:shadow-slate-500'>
                        <div className='w-fit h-full bg-white rounded drop-shadow-lg px-2 pt-2 pb-2 flex justify-center items-center'>
                            <img className='object-cover rounded-full h-16 w-16 px-2' src={UWRC} alt="uwrc-logo"></img>
                            <p className='text-lg text-black text-left'>Presented a paper on "Ensuring Consistent Computer Access for Low-Income Rutgers Students" at the 2023 Rutgers Undergraduate Research and Writing Conference</p>
                        </div>
                    </div>
                </div>

                <h1 className='text-4xl p-4'>Interests </h1>
                <div className='grid grid-cols-12 gap-6 mx-auto'>
                    <div className='col-span-6  rounded hover:shadow-md hover:shadow-slate-500 '>
                        <div className='w-fit h-full mx-2 pd-2 bg-blue-400 rounded drop-shadow-lg flex justify-center items-center'>
                            <h2 className='text-xl text-black font-bold h-full flex items-center px-2'>Hobbies</h2>
                            <ul className='text-md text-black flex flex-col items-center bg-white w-fit rounded-md'>
                                <li>Hiking</li>
                                <li>Gym</li>
                                <li>Comics</li>
                                <li>2D Platformer Games</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-span-6  rounded hover:shadow-md hover:shadow-slate-500 '>
                        <div className='w-fit h-full mx-2 pd-2 bg-blue-400 rounded drop-shadow-lg flex justify-center items-center'>
                            <h2 className='text-xl text-black font-bold h-full flex items-center px-2'>Resources</h2>
                            <ul className='text-md text-black flex flex-col items-center bg-white rounded-md  px-2'>
                                <a className="hover:text-blue-400" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>
                                <a className="hover:text-blue-400" href="https://www.w3schools.com/react/react_hooks.asp">React Hooks</a>
                                <a className="hover:text-blue-400" href="https://tailwindcss.com/docs/installation">Tailwind CSS</a>
                                <a className="hover:text-blue-400" href="https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples">React and Fetch API</a>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home