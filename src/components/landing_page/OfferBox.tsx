import React from 'react'

interface OfferBoxProps {
    title: string,
    price: string,
}

const OfferBox : React.FC<OfferBoxProps> = ({title, price}) => {
  return (
    <article className='w-full text-white rounded-lg h-64 flex flex-col justify-center items-center bg-primaryColor'>
        <p className='text-center font-bold text-3xl'>{title}</p>
        <p className='text-xs text-center mt-5 font-light'>Minimum deposit from</p>
        <p className='text-center text-2xl font-semibold'>{price}</p>
        <button className='bg-white mt-7 text-primaryColor text-sm px-5 py-2 rounded'>Open Account</button>
    </article>
  )
}

export default OfferBox