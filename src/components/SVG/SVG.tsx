import React, { FC } from 'react';

interface SVGProps {
    text: string;
    svg_src: string;
}

const SVG: FC<SVGProps> = (props) => {

  return (
      <div className='
          flex w-fit flex-row justify-center items-center
          max-w-[7.5vw] mt-10
      '>

              <img src={props.svg_src} alt='just an icon' className='
                    w-1/6 mr-2.5
                    invert
              '/>
        <span className='
              text-white font-bold
        '
        >
            {props.text}
        </span>
    </div>);
};

export default SVG;
