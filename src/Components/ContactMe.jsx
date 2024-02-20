import React from 'react'

const ContactMe = () => {

    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            
            <div className='flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <h2 className='text-2xl'>If you have any questions, suggestions, or just want to get in touch with me, I'm available via email to chat.</h2>
                <div className="mx-auto w-full max-w-[550px] p-5">
                    <p>Full Name</p>
                    <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                    <p>Email Address</p>
                    <input type="text" name="name" id="email" placeholder="Email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    <p>Subject</p>
                    <input type="text" name="name" id="subject" placeholder="Subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    <p>message</p>
                    <input type="text" name="name" id="message" placeholder="Message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                </div>
                <button className='bg-white border rounder-md w-10 h-5' onClick={() => alert("Note: This feature does not work yet.")}>Send</button>
            </div>
        </div>
    )
}
export default ContactMe;