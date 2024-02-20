import React, {useState} from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from '../Components/Home.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import ContactMe from './ContactMe.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Outlet/>}>
                {/*Home, Navbar pages*/}
                <Route index element={<Home/>}/>
                <Route path='Home' element={<Home />}/>
                <Route path='Projects' element={<Projects/>}/>
                <Route path='Contact' element={<ContactMe/>}/>
                <Route path='Resume' element={<Resume/>}/>
                <Route path='AboutMe' element={<AboutMe/>}/>
                <Route path='Skills' element={<Skills/>}/>
            </Route>
        </Routes>
    )
}
export default Router;