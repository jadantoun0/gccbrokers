import Image from 'next/image'
import React from 'react';

interface WhatWeDoArticleProps {
    title: string;
    description: string;
    imageSrc: string;
    imageSize: number;

}

export const WhatWeDoArticle : React.FC<WhatWeDoArticleProps> = ({title, description, imageSrc, imageSize}) => {
  return (
    <div className='bg-white cursor-pointer transform transition-transform duration-500  max-w-80 h-80 px-12 mx-7 flex flex-col items-center py-7 rounded-3xl'>
        <div className='w-20 mt-2 h-20 flex justify-center items-center rounded-full bg-gray-100'>
            <Image
                src={imageSrc}
                alt="Icon" 
                width={imageSize} 
                height={imageSize} 
            />
        </div>
        <p className='font-semibold mt-4 mb-4 text-xl text-primaryColor text-center'>{title}</p>
        <p className='text-sm font-light text-center'>{description}</p>
    </div>
  )
}
