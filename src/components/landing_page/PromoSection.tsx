"use client"; 

import Image from 'next/image';
import React from 'react';
import Reveal from '../animations/Reveal';

interface PromoSectionProps {
  className?: string; 
}


export const PromoSection: React.FC<PromoSectionProps> = ({ className }) => {  
  return (
    <section className={`flex flex-col items-center justify-between w-full relative ${className}`}>
      {/* Background Image Layer */}
      <div className="mt-30 absolute bg-black inset-0">
        <Image 
          src="/bgimg.jpg" 
          alt="Background" 
          layout="fill" 
          objectFit="cover"
          className="opacity-15"
        />
      </div>

      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-primaryColor to-secondaryColor opacity-80" />

      {/* Content Layer */}
      <div className="flex mt-32 flex-col lg:flex-row items-center justify-center w-full overflow-hidden text-white relative"> 
        <div className="flex flex-col px-5 lg:flex-row items-stretch justify-between">
          <div className="max-w-[600px] py-5 px-3 flex flex-col justify-center"
          >
            <Reveal type='fade' delay={0.1}>
              <h1 className="text-5xl font-bold text-center lg:text-start">
                Empowering your financial journey!
              </h1>
            </Reveal>
            <Reveal type='fade' delay={0.2}>
              <p className="mt-4 font-thin text-center lg:text-start">
                Join thousands of successful traders who trust us for a seamless trading experience. Dive into the world of forex trading where opportunities are endless. Whether you are a beginner or an experienced trader, our resources are designed to equip you with everything you need to succeed.
              </p>
            </Reveal>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Reveal type='fade' delay={0.3}>
                <button className="px-6 py-3 bg-white text-[#0a0c29] rounded-full mr-4">
                  Start trading
                </button>
              </Reveal>
              <Reveal type='fade' delay={0.4}>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full">
                  Open demo
                </button>
              </Reveal>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Reveal type='fade'>
              <Image src="/man.png" alt="Business man" width={400} height={400} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
