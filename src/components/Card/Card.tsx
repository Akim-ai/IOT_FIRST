import React, { FC } from 'react';

interface CardProps {
    title: string;
    desc: string;
    img_src: string;
}

const Card: FC<CardProps> = (props) => {

  return (
      <th className='
            flex flex-col
            w-[35vh] h-[35vh] m-2 p-10
             bg-black justify-around
             rounded-md
      '>
          <div className='
                flex text-center content-center
          '>
              <img src={props.img_src} alt="" className='
                    w-1/5
              '
              />
              <span className='
                    text-white font-bold text-xl max-w-2/5 flex
                    text-center h-auto items-center ml-4
              '>{props.title}</span>
          </div>
          <span className='
                text-gray-400 font-semibold
                mt-5 text-start
          '>{props.desc}</span>
          <a href="/#" className='
                text-start
                default__gradient
                text__fill bg-clip-text

          '>LEARN MORE</a>
      </th>
  );
};

export default Card;
