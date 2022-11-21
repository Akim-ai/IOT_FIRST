import React, { FC } from 'react';
import MenuLinkController from "./Components/MenuLink/MenuLinkController";
import {linkData} from "./Components/MenuLink/data";
import MenuButton from "./Components/MenuButton";

interface MenuProps {}

const Menu: FC<MenuProps> = (props) => {

  return (
      <div className='w-screen flex justify-center'>
      <div className='
        flex justify-between items-center
        w-4/6 pt-8
      '>
          <h2 className='
                w-auto
                bg-clip-text text__fill
                default__gradient
                font-extrabold
                text-2xl
                ml-12
                p-0.5
          '>
              Saaspience
          </h2>
          <MenuLinkController linkData={linkData}/>
          <MenuButton/>
      </div>
      </div>
  );
};

export default Menu;
