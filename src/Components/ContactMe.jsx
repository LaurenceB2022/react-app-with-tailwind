import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const service_ID = "service_8lwphg5"
    const template_ID = "template_ldq88zi"
    const publicKey = "YVGEOhreP4pejheJn"

    const form = {
        name: '',
        email: '',
        message: ''
    };
    const [data, setData] = useState(form);

    const resetForm = () =>{
        setData({name: '', email: '', subject: '', message: ''})
    }

    const handleInput = (e) => {
        setData({ ... data, [e.target.name]: e.target.value});
    };

    const handleSubmit = ( e ) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
        {/*Email address is valid and all fields are filled in */}
        if(validEmail.test(data.email) && data.message !== null && data.name !== null){
            emailjs.sendForm(
                service_ID,
                template_ID,
                form,
                publicKey
            )
            .then(
             
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
          //resets the form
          resetForm();

        }
        else if(!validEmail.test(data.email)){
            alert("Email entered is invalid. Please correct and resubmit.")
        }
        else{
            alert("One or more missing fields detected. Please fill these in and resubmit.")
        }
    }


    return (
        <div className='w-full pt-20 h-screen bg-black overflow-auto'>
            
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
                    <input type="text" name="name" id="name" placeholder="Full Name" value={data.name} onChange={handleInput}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                    <p className='text-white'>Email Address</p>
                    <input type="text" name="email" id="email" placeholder="Email" value={data.email} onChange={handleInput}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    {/*<p className='text-white'>Subject</p>
                    <input type="text" name="subject" id="subject" placeholder="Subject" value={data.subject} onChange={handleInput}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"></input>
                    */}
                    <p className='text-white'>Message</p>
                    <textarea rows="3" name="message" id="message" placeholder="Message" value={data.message} onChange={handleInput}
                    className="w-full h-[10em] resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                </div>
                <button className='bg-gray-800 text-xl border border-gray-500 rounded-xl font-bold px-6 pb-2 pt-2' onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
}
export default ContactMe;