import React, { FC } from 'react';

interface SVGLinkProps {
  svg_src: string
}

const SVGLink: FC<SVGLinkProps> = (props) => {

  return (
      <a href='/'>
        <svg href={props.svg_src}></svg>
      </a>
  );
};

export default SVGLink;
