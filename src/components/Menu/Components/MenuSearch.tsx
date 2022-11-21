import React, { FC } from 'react';

interface MenuSearchProps {}

const MenuSearch: FC<MenuSearchProps> = (props) => {

  return (
      <div className='
            w-fit flex z-10 right-1/2 top-[7%] justify-center items-center
      '>

          <input type="checkbox" className='w-5 h-5 opacity-0'/>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" className='
                    w-5 h-5 justify-center items-center absolute
            '>
                    <linearGradient x1="100%" y1="92.034%" x2="50%" y2="7.2%" id="svg_icon_gradient">
                        <stop offset="0%" className='
                                svg__gradient__to
                        ' />
                        <stop stopOpacity=".5" offset="100%" className='
                                svg__gradient__from
                        ' />
                    </linearGradient>
                <g fillRule="evenodd" fillOpacity="1" className='
                    fill-[url(#svg_icon_gradient)]
                '>

              <path xmlns="http://www.w3.org/2000/svg" d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>

                </g>
            </svg>
      </div>
  );
};

export default MenuSearch;
