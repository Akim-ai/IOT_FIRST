import React, { FC } from 'react';

interface BackGroundImageProps {}

const BackGroundImage: FC<BackGroundImageProps> = (props) => {

  return (
      <div className='
            w-screen h-screen
            bg-bottom
            absolute
            open__bg__img
            before:h-[30vh]
            before:w-[30vw]
            before:rounded-full
            before:blur-[20vh]
            before:opacity-30
            before:absolute
            before:bg-defaultGradientTo
            before:right-[30vw]
            before:-top-[30vh]
            before:max-w-[100vw]
      '/>
  );
};

export default BackGroundImage;
