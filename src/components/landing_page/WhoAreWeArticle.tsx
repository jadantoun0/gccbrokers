import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Reveal from '../animations/Reveal';


interface WhoAreWeArticleProps {
    title: string;
    content: string[];
}

const WhoAreWeArticle : React.FC<WhoAreWeArticleProps> = ({title, content}) => {
  return (
    <Reveal type="fade">
      <article className='flex items-start justify-start'>
          <MdOutlineKeyboardArrowRight size={45} className='text-primaryColor' />
          <div className='max-w-[500px]'>
              <p className='font-bold text-xl py-2 text-primaryColor'>{title}</p>
              <ul className='flex flex-col gap-y-1'>
                  { content.map((row, index) => <li key={index} className='font-light text-md'>{row}</li>)}
              </ul>
          </div>
      </article>
    </Reveal>
  )
}

export default WhoAreWeArticle