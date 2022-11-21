import React, { FC } from 'react';

interface MenuLinkProps {
    text: string;
    path: string;
}

const MenuLink: FC<MenuLinkProps> = (props) => {

  return (
          <a href={props.path}
                className='
                     max-w-auto
                     text-1xl font-extrabold
                     text-sm text-white
                     p-0.5 z-10
                     hover:bg-clip-text
                     hover:default__gradient
                     hover:text__fill
                '
          >{props.text}</a>
  );
};

export default MenuLink;
export type {MenuLinkProps}
