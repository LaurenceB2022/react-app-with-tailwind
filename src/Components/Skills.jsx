import React from 'react'
import java from '../assets/Java-Emblem.jpg'
import reactlogo from '../assets/ReactJS.png'
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
                <div id="text-explaination" class=' flex flex-col justify-center items-center mx-5 mt-5 mb-5 '>
                    <ul className='text-xl  text-black'>
                        <li className='rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5' >2.5 years of experience using the ticketing application ServiceNow</li>
                        <li className='rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5'> 1 year of experience using Agile software development methodologies </li>
                        <li className='rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5 '>2.5 years of experience using the cloud-based team communication platform Slack</li>
                        <li className='rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5' >4 years of experience working in customer service</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-5 flex flex-col justify-center items-center mx-auto'>
                <div className='text-3xl text-white font-extrabold px-2'>
                    <p>Helpful Resources for Computer Science</p>
                </div>
                <div className='rounded border-white border-2 px-20 pt-5 pb-5 w-full flex flex-col items-center'>
                    <h1 className='mb-5 text-2xl text-white'>Depth First Search and Breadth First Search</h1>
                    <iframe 
                        src="https://www.youtube.com/embed/TIbUeeksXcI" 
                        frameborder='0'
                        className="h-[30em] w-full"
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    />
                    <div className=' mx-5 mt-5 mb-5 '>
                        <h2 className='px-5 pt-5 pb-5 bg-white shadow-md text-black rounded'>Jarvis goes over the logic and implementation of the searching algorithms DFS (Depth First Search) and BFS (Breadth First Search). The
                        DFS algorithm can be used to backtrack searches on data structures such as graphs, nodes, adjacency lists, etc. 
                        The BFS algorithm is used to find if a path exists between objects in a graph or adjacency list. The Java code for both algorithms is presented and dissected here.</h2>
                    </div>
                </div>
                <div className='rounded border-white border-2 px-20 pt-5 pb-5 w-full flex flex-col items-center'>
                    <h1 className='mb-5 text-2xl text-white'>API Usage</h1>
                    <iframe className="rounded border-blue-400" width="75%" height="100em" scrolling="no" frameborder="no" allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1378517041&color=93c4fd&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false">

                    </iframe>
                    <div className=' mx-5 mt-5 mb-5 '>
                        <h2 className='px-5 pt-5 pb-5 bg-white shadow-md text-black rounded'>Mike and Matt's podcast episode discusses some of the best practices when implementing APIs (Application programming interfaces) in web applications. Mike recounts some of his history over the decades developing websites, and relays some of the best RESTful techniques he has learned to seamlessly receive and process information between external clients.</h2>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}
export default Skills;