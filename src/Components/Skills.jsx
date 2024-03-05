import React from 'react'
import java from '../assets/Java-Emblem.jpg'
import reactlogo from '../logo.svg'
import pythonlogo from '../assets/Python-logo-notext.svg.png'
import VSC from '../assets/Visual_Studio_Code_1.35_icon.svg.png'
import SQL from '../assets/Sql_data_base_with_logo.png'
import GitHub from '../assets/Octicons-mark-github.svg.png'
import C from '../assets/C_Logo.png'
import Jira from '../assets/jira-icon.png'
import Fetch from '../assets/api-fetch.jpg'
import JS from '../assets/JavaScript-logo.png'
import Confluence from '../assets/confluence.jpg'
import PS from '../assets/Photoshop.png'


const Skills = () => {
    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            <h1 className='flex justify-center text-3xl px-10'>Skills</h1>
            <div className='px-6 pt-6 pb-6 space-y-5 mx-auto'>
                <div className="container content-center mx-auto grid grid-cols-12 gap-8">

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>SQL</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={SQL} alt='sql-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>
                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Git</p>
                        </div>
                        
                        <div className='card card-compact rounded w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={GitHub} alt='github-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Java</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={java} alt='java-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>React</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={reactlogo} alt='react-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Python</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={pythonlogo} alt='python-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Visual Studio Code</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={VSC} alt='vsc-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                </div>

                <div className="container content-center mx-auto grid grid-cols-12 gap-8">
                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>C</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={C} alt='C-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Jira</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={Jira} alt='jira-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Fetch API</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full shadow-md bg-yellow-300'>
                            <figure className='h-40 flex justify-center'>
                                <img src={Fetch} alt='fetch-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>JavaScript</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full shadow-md '>
                            <figure className='h-40 flex justify-center bg-yellow-300'>
                                <img src={JS} alt='javascript-logo' className='object-fill '></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Confluence</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={Confluence} alt='Confluence-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>

                    <div className='rounded col-span-2 flex flex-col border-4 border-blue-300 justify-center items-center bg-white shadow-sm shadow-slate-500'>
                        <div className='w-full h-fit flex justify-center bg-blue-200'>
                            <p className='text-xl text-black'>Photoshop</p>
                        </div>
                        
                        <div className='rounded card card-compact w-fit h-full bg-white shadow-md'>
                            <figure className='h-40 flex justify-center'>
                                <img src={PS} alt='photoshop-logo' className='object-scale-down'></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;