import React, {useState} from 'react'
import logo from '../assets/LB-logo.png'
import {FaGithub, FaLinkedin, FaBars, FaTimes} from 'react-icons/fa'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
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
                    <li><a href="/">GitHub</a><FaGithub/></li>
                    <li><a href="/">LinkedIn</a><FaLinkedin/></li>
                    
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