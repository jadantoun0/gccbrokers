import React from 'react'
import OfferBox from './OfferBox'
import Reveal from '../animations/Reveal'

const WhatWeOffer = () => {
  const offers = [
    {
        title: "STANDARD",
        price: "$25"
    },
    {
        title: "PRO",
        price: "$5000"
    },
    {
        title: "RAW",
        price: "$20,000"
    },
  ]
  
    return (
    <div> 
        <div className='cursor-pointer bg-[url("/images/bg.jpg")] bg-cover  bg-white inset-0 flex flex-col justify-end items-center pt-10 pb-10  text-primaryColor'>
            <Reveal type='fade' direction='left' delay={0.3}>
              <p className='font-bold text-center text-4xl mb-4 '>What We Offer</p>
            </Reveal>
            <Reveal type='fade' direction='left' delay={0.4}>
              <p className='text-center mb-14'>Choose the Right Plan for Your Trading Needs</p>
            </Reveal>
            <div className='flex flex-col max-w-7xl gap-y-3 sm:flex-row px-4 lg:px-16 mt-4 justify-center gap-x-3 w-full'>
                {offers.map((offer, index) => 
                <Reveal type='scale' direction='left' delay={0.2 * index} fullWidth={true}>
                  <OfferBox  key={index} title={offer.title} price={offer.price} />
                </Reveal>
                )}
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer