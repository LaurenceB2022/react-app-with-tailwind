import React from 'react'

const ContactMe = () => {

    return (
        <div className='w-full pt-20 h-full bg-black overflow-auto'>
            
            <div className='flex flex-col items-center justify-center px-5 pt-5 pb-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p className='text-1xl'>If you have any questions, suggestions, or just want to get in touch with me, I'm available via email to chat.</p>
                
                <div className='bg-gray-800 border border-gray-500 rounded-lg shadow-md px-3'>
                    <a href="mailto:laurence.bartram@rutgers.edu" className='text-lg'>laurence.bartram@rutgers.edu</a>
                </div>
                
                <div className="mx-auto border-2 border-white  mt-2 mb-2 w-full max-w-[550px] p-5 bg-purple-300 bg-opacity-50 rounded-md">
                    <p className='text-white'>Full Name</p>
                    <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                    <p className='text-white'>Email Address</p>
                    <input type="text" name="email" id="email" placeholder="Email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    <p className='text-white'>Subject</p>
                    <input type="text" name="subject" id="subject" placeholder="Subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    <p className='text-white'>Message</p>
                    <textarea rows="3" name="message" id="message" placeholder="Message"
                    className="w-full h-[10em] resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                </div>
                <button className='bg-gray-800 text-xl border border-gray-500 rounded-xl font-bold px-6 pb-2 pt-2' onClick={() => alert("Note: This feature does not work yet.")}>Send</button>
            </div>
        </div>
    )
}
export default ContactMe;