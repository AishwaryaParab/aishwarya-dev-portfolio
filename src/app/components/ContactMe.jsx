"use client"
import React, { useContext, useState } from 'react'
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import { ScrollContext } from '../context/ScrollContext';

const ContactMe = () => {
  const { contactRef } = useContext(ScrollContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
        name,
        email,
        subject,
        message
    }

    // fetch('/api/send', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then((res) => {
    //     console.log('Response received');
    //     if (res.status === 200) {
    //         console.log('Response succeeded');
    //         setResponse(true);
    //         setName('');
    //         setEmail('');
    //         setSubject('');
    //         setMessage('');
    //     } else {
    //         console.log(res.status);
    //     }
    // })

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <section ref={contactRef} className='grid md:grid-cols-2 py-24 gap-8 md:gap-6 relative'>
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/3 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                Whether you have a question or just want to say &apos;Hi&apos;, I&apos;ll try my best to get back to you. My inbox is always open! ✉️
            </p>
            <div className='social flex flex-row gap-2'>
                <Link href="https://github.com/AishwaryaParab" target="_blank">
                    <Image src={GitHubIcon} alt="GitHub icon" />
                </Link>

                <Link href="https://www.linkedin.com/in/aishwaryaparab" target="_blank">
                    <Image src={LinkedinIcon} alt="LinkedIn icon" />
                </Link>
            </div>
        </div>

        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='name' className='text-white block text-sm mb-2 font-medium'>Your Name</label>
                    <input
                        className='bg-[#18191E] mb-2 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type="text" 
                        id="name" 
                        required 
                        placeholder='Please enter your name'
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block text-sm mb-2 font-medium'>Your Email</label>
                    <input
                        className='bg-[#18191E] mb-2 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type="email" 
                        id="email" 
                        required 
                        placeholder='Please enter your email'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block text-sm mb-2 font-medium'>Subject</label>
                    <input
                        className='bg-[#18191E] mb-2 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type="text" 
                        id="subject" 
                        required 
                        placeholder='Please enter your subject'
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea 
                        name="message" 
                        id='message' 
                        className='bg-[#18191E] mb-2 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default ContactMe