import React, { FC } from 'react';

interface GradientProps {
  text: string
}

const Gradient: FC<GradientProps> = (props) => {

  return (
      <span className='
                bg-clip-text text__fill
                default__gradient

                '>
        {props.text}
      </span>
  );
};

export default Gradient;
