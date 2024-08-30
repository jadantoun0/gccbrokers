import Image from 'next/image'
import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import Reveal from '../animations/Reveal'

const ContactUs = () => {
  return (
    <div className='bg-gradient-to-r text-white from-primaryColor to-secondaryColor py-14 px-4 flex items-center flex-col justify-center'>
      <div className='flex flex-col justify-center'>
        <Reveal type='scale' delay={0.4}>
          <p className='text-3xl lg:text-4xl text-center font-semibold'>Contact Us</p>
        </Reveal>
        <Reveal type='scale' delay={0.5}>
          <p className='mt-5 text-sm text-center lg:text-start'>Need assistance? Our team of multilingual experts are here for you. 24/5</p>
        </Reveal>
        <div className='flex justify-between mt-6'>
          <Reveal type='scale'>
            <div className='mt-8 flex items-center flex-col'>
              {/* <Image width={30} height={30} src='assets/icons/mail.svg' alt=""/> */}
              <HiOutlineMail size={50} />
              <div className='h-4'></div>
              <p className='text-xl lg:text-2xl'>Email</p>
              <p className='text-sm mt-3 underline'>support@gccbrokers.com</p>
            </div>
          </Reveal>
          <div className='w-4'></div>
          <Reveal type='scale'>
            <div className='mt-8 flex items-center flex-col'>
              <IoChatboxEllipsesOutline size={50} />
              <div className='h-4'></div>
              <p className='text-xl lg:text-2xl'>Live Chat</p>
              <p className='text-sm mt-3 underline'>Start a new chat</p>
            </div>
          </Reveal>
        </div>
      </div>
     
    </div>
  )
}

export default ContactUs