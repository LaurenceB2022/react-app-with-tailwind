import React, {useState} from 'react'
import logo from '../assets/Rutgers_Logo.png'
import {FaGithub, FaLinkedin, FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom';



const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className="fixed top-0 w-full h-[70px] flex justify-between items-center px-10  border-b text-white-300 bg-gradient-to-r from-purple-900 to-blue-900 border-gray-700">
            <div>
                <img src={logo} alt="LB Logo" style={{width: '50px'}}></img>
            </div>

            
                <ul className='flex flex-row px-10'>
                    <li id="home" className='active:text-white'><Link to='/Home' className='active:text-white' activeClassName="active">Home</Link></li>
                    <li id="skills"><Link to='/Skills' activeClassName="active">Skills</Link></li>
                    <li id="projects"><Link to='/Projects' activeClassName="active">Projects</Link></li>
                    {/*<li><Link to='/AboutMe'>About Me</Link></li>*/}
                    <li id="resources"><Link to='/Resources' activeClassName="active">Resources</Link></li>
                    <li id="resume"><Link to='/Resume' activeClassName="active" >Resume</Link></li>
                    <li id="contact"><Link to='/Contact' activeClassName="active">Contact</Link></li>
                    {/*<li><Link to='/Chat'>Chat</Link></li>*/}
                    
                </ul>

            {/*Hamburger */}
            <div onClick={handleClick} className='z-10 top-[50%]'>
                {!nav ? <FaBars/> : <FaTimes/>}
                
            </div>

            {/*Social Icons*/}
            <div className='flex fixed flex-col top-[35%] left-[0px]'>
                <ul>
                    <li className='w-[80px] h-[30px] flex right-[100%] ml-[-10px]  text-white justify-between items-center bg-violet-950'>
                    Socials    </li>   
                    <li className='w-[160px] h-[60px] flex ml-[-90px]  text-white justify-between items-center hover:ml-[10px] duration-300 bg-zinc-400'>
                        <a className='text-white flex justify-between items-center w-full' href="https://github.com/LaurenceB2022">
                            GitHub<FaGithub className=' bg-black' size={50}></FaGithub>
                        </a>
                    </li> 
                    <li className='w-[160px] h-[60px] flex ml-[-90px] text-white justify-between items-center hover:ml-[10px] duration-300 bg-blue-500'>
                        <a className='text-white flex justify-between items-center w-full'href="https://www.linkedin.com/in/laurencebartram/">
                        LinkedIn<FaLinkedin className='' size={50}/>
                        </a>
                    </li>              
                </ul>
            </div>
        </div>

        
    )
} 
export default NavBar