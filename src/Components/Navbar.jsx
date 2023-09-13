import React, {useState} from 'react'
import logo from '../assets/LB-logo.png'
import {FaGithub, FaLinkedin, FaBars, FaTimes} from 'react-icons/fa'



const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    const handleClick = () => setNav(!nav)
    const textGitHub = () => {
        
        <li className='w-[160px] h-[60px] flex mr-[100px] justify-between items-center text-white'>GitHub</li>
        
    }

    const textLinkedIn = () => {
        <li className='w-[160px] h-[60px] flex ml-[-100px] mr-[100px] text-white justify-between items-center'>LinkedIn</li>
    }
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-black text-white-300">
            <div>
                <img src={logo} alt="LB Logo" style={{width: '50px'}}></img>
            </div>

            <div>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/*Hamburger */}
            <div onClick={handleClick} className='z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
                <FaBars />
            </div>

            {/*Social Icons*/}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>    
                    <div onMouseEnter={ () => setIsHovering(true)} onMouseLeave={ () => setIsHovering(false)}></div>
                        <div>{isHovering && textGitHub}</div>
                        <a className='text-white' href="https://github.com/LaurenceB2022"><FaGithub className='flex bg-black' size={40}></FaGithub></a>
                    <div onMouseEnter={ () => setIsHovering(true)} onMouseLeave={ () => setIsHovering(false)}></div>
                        <div>{isHovering && textLinkedIn}</div>
                        <a className='text-blue-400'href="https://www.linkedin.com/in/laurence-bartram-690261210/"><FaLinkedin className='flex bg-white' size={40}/></a>
                    
                </ul>
            </div>
            
            {/*Mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        </div>

        
    )
} 
export default NavBar