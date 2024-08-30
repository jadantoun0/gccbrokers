import React from 'react'
import Reveal from '../animations/Reveal'
import Image from 'next/image';

export const TradingSpeifications = () => {

   const images = [
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-bank-alt.ca2e4a2a.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-visa.fb193c8e.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-mastercard.7ba56a0d.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-crypto.b43b4327.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-pm.3d91437b.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-skrill.29f01928.webp&w=1080&q=75', alt: 'Visa Card' },
    { src: 'https://www.gccbrokers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-neteller.c5e7c1ca.webp&w=1080&q=75', alt: 'Visa Card' },
  ];
  
  return (
    <div className='flex items-center justify-center'>
      <div className='my-7 w-full max-w-6xl'>
          <Reveal type='scale'>
            <p className='text-3xl font-bold text-center py-7 text-primaryColor'>Trading Specifications</p>
          </Reveal>
          <Reveal type='scale'>
            <p className='mx-3'>The trading specifications below outline the various trading conditions that are available to you when you trade with GCC Brokers.</p>
          </Reveal>
          <Reveal type='scale'>
            <div className='mt-7 py-4 border-2 rounded-sm px-5 mx-3'>
              <p className='font-semibold text-2xl'>Time Zone</p>
              <p className='mt-3'>All timings in the trading schedule are according to our server timezone which is set to GMT+3 to align best with all global markets.</p>
            </div>
          </Reveal>
          <div className='h-2'></div>
          <Reveal type='scale'>
            <div className='mt-5 py-4  mx-3  border-2 rounded-sm px-5'>
              <p className='font-semibold text-2xl'>Financing (Swap)</p>
              <ul className='flex flex-col mt-6 gap-y-4'>
                <li>Swap is the interest added or deducted for holding a position open overnight.</li>
                <li>Swap rates are calculated in points or percentage depending on the instrument specifications. MetaTrader 5 convert them automatically into the base currency of the account.</li>
                <li>Swap rates are tripled on Wednesday at 00:00 server time to account for weekends.</li>
                <li>Note: Swap rates are subject to change based on market conditions and are updated regularly.</li>
                <li>To view the swap rates for each instrument, please refer to the trading platform.</li>
              </ul>
              <div className='mx-4 bg-gray-200 h-[1px] my-8'></div>
              <div className='flex'>
                <div className='text-xs font-semibold bg-yellow-300 px-3 py-1 rounded-3xl'>Islamic Accounts</div>
              </div>
              <p className='mt-3'>GCC Brokers offers Islamic accounts that comply with the Sharia law and do not charge swap on overnight positions upon request and eligibility.</p>
            </div>
          </Reveal>

          <div className='mt-10'>
            <div className='grid mt-2 grid-cols-4 mx-5 sm:grid-cols-5 md:grid-cols-7 place-items-center gap-2 max-w-7xl py-8'>
              {images.map((image, index) => (
                <Reveal key={index} type='fade' delay={0.1 * index}>
                  <div key={index} className="w-20 h-20">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

      </div>
    </div>
  )
}
