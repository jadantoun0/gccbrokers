import Image from 'next/image'
import React from 'react'
import { WhatWeDoArticle } from './WhatWeDoArticle';
import Reveal from '../animations/Reveal';

const WhatWeDo = () => {
  const data = [
    {
        title: "Market Analysis",
        description: "Stay informed with our detailed market analysis and expert insights to make confident trading decisions.",
        image: "/icons/trending_up.svg",
        size: 40,
    },  
    {
        title: "Innovative Trading Platforms",
        description: "Trade efficiently with our advanced platforms offering real-time data, customizable charts, and user-friendly interfaces",
        image: "/icons/laptop_icon.png",
        size: 60,
    },
    {
        title: "Personalized Support",
        description: "Receive dedicated support and personalized guidance to ensure a smooth and successful trading experience",
        image: "/icons/headset.svg",
        size: 40,
    },
  ];

  return (
    <div className='bg-lightGray  text-primaryColor flex py-10 flex-col items-center'>
        <Reveal type='scale'>
          <p className='font-bold text-4xl text-primaryColor'>What We Do</p> 
        </Reveal>
        <div className='h-10'></div>
        <div className='flex flex-col gap-y-5 lg:flex-row gap-x-5'>
           {data.map((row, index) => 
            <Reveal key={index} type="scale" delay={index * 0.2}>
              <WhatWeDoArticle 
                    key={index} 
                    title={row.title} 
                    description={row.description} 
                    imageSrc={row.image} 
                    imageSize={row.size} 
                />
            </Reveal>
                
            )}
        </div>
    </div>
  )
}

export default WhatWeDo