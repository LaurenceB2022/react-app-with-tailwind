import React from 'react'
import ShowGO from '../assets/ShowGO.PNG'
import {Slideshow, Slide} from '../Components/Slideshow'
import photo1 from '../assets/app2.PNG'
import photo2 from '../assets/app3.PNG'
import photo3 from '../assets/app1.PNG'

const Projects = () => {
    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            <div className='flex flex-col justify-center items-center mx-auto pt-5 pb-5'>
                <div id="ShowGO" className='bg-purple-200 bg-opacity-50 max-w-[30rem] rounded border-slate-700 gap-2 px-5 pt-5 pb-5 flex flex-col justify-center items-center'>
                    
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
                <div id="photo-album" className="mt-5 px-5 pt-5 pb-5 bg-purple-200 bg-opacity-50 max-w-[30rem] rounded border-slate-700 gap-2 flex flex-col justify-center items-center">
                    <div className='aspect-auto relative rounded-md overflow-hidden bg-white shadow-md'>
                        <Slideshow>
                            <Slide className='w-full h-full'>
                                <img src={photo1} className='inset-0 w-fit h-fit' width="100%" height="100%"></img>
                            </Slide>
                            <Slide className='w-full h-full'>
                                <img src={photo2} className='inset-0 w-fit h-fit' width="100%" height="100%"></img>
                            </Slide>
                            <Slide className='w-full h-full'>
                                <img src={photo3}></img>
                            </Slide>
                        </Slideshow>
                    </div>
                    <h1 className='text-2xl text-white font-extrabold flex justify-center pb-2'>Photo Album</h1>
                    <div className='bg-none pb-5'>
                        <p className='text-sm text-white font-bold px-5'> This photo album app was designed to allow users to store photos in Albums. The slideshow contains images of
                            what the image display looked like, the options to add tags to photos, and the functionality for searching by tag-value pairs.
                             Photos are added using the phone's internal storage, and serialized / deserialized into the app using json string formatting. The app is only compatible with Android phones.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Projects;