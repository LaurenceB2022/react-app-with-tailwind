import React from 'react'
import ShowGO from '../assets/ShowGO.PNG'

const Projects = () => {
    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            <div className='flex flex-row justify-center items-center mx-auto'>
                <div id="ShowGO" className='bg-purple-200 bg-opacity-50 max-w-[30rem] rounded border-slate-700 gap-2 px-5 pt-5 flex flex-col justify-center items-center'>
                    
                    <div className='aspect-auto relative rounded-md overflow-hidden bg-white shadow-md'>
                        <img src={ShowGO} alt="showgo-img" className='inset-0' width="480px" height="213.5px"></img>
                    </div>
                    <h1 className='text-2xl text-white font-extrabold flex justify-center pb-2'>ShowGO</h1>
                    <div className='bg-none pb-5'>
                        <p className='text-sm text-white font-bold px-5'>ShowGO is a ticketing web application designed to allow local venues to host events. Attendees can purchase tickets for multiple upcoming events, and activate an event ticket using 
                            the check-in feature in their profile. Venues can host multiple events, see previous events, and view their billing history for how many tickets were purchased. There are two types of accounts: Venue and User. 
                            Each type can modify their passwords and profile pictures. However, venues can also ban user accounts from attending events, manage their billing history, and update their payment types. 
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Projects;