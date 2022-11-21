import React, { FC } from 'react';

interface MenuButtonProps {}

const MenuButton: FC<MenuButtonProps> = (props) => {

  return (
      <div className='
            w-[11.5vw] h-[7.5vh]
            mr-1
            mt-1.5
            default__border__gradient
            flex justify-center place-items-center
      '>
        <a href="/#" className='
            w-[11.275vw] h-[7.1vh]
            bg-black
            flex items-center justify-center
            rounded-sm
            text-white text-xl
            font-extrabold
            hover:bg-inherit
            transition duration-500
        '>
          lorem imps
        </a>
      </div>
  );
};

export default MenuButton;
