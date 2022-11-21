import React, { FC } from 'react';
import BackGroundImage from "./BackGroundImage/BackGroundImage";
import {SVG} from "../../components";
import {Features} from "../Features";
import Footer from "../../components/Footer/Footer";

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = (props) => {

  return (
      <div className='
            min-w-screen
            min-h-screen
            flex justify-center items-center flex-col
      '>
          <div className='
                flex justify-center items-center flex-col
                border-b-black
                border-b-2
                max-h-screen
                overflow-hidden
          '>
          <BackGroundImage/>
          <div className='
                z-10
                flex justify-center items-center flex-col
                w-4/5
                h-screen
          '>
              <div className='
                    w-4/5 flex flex-col
                    items-center
              '>
                  <h2 className='
                        default__gradient
                        text__fill bg-clip-text
                        w-fit h-fit
                        font-Arab
                        font-black
                        text-header
                        text-center
                        w-5/6
                  '>
                        LET YOUR BUSINESS FLY WITH NEXT-LEVEL  ANALYTICS TOOL
                  </h2>
                  <span className='
                        w-1/2 text-white text-center text-xl font-bold mt-10
                  '>
                        With SAASPIENCE, you can easily get more insightful data from your websites and apps.
                  </span>
                  <div className="
                        mt-[5.75vh]
                        flex  justify-around
                        w-5/12
                  ">
                      <a href='/' className='
                            uppercase
                            pt-6 pb-6
                            pr-12 pl-12
                            default__gradient
                            rounded-md
                            text-white
                            font-bold
                            duration-500
                            hover:bg-gradient-to-br
                            hover:from-amber-50 hover:to-white
                            hover:text-black
                      '>start free trial</a>
                      <a href='/' className='
                            uppercase
                            pt-6 pb-6
                            pr-12 pl-12
                            black__gradient
                            rounded-md
                            text-white
                            font-bold
                            transition
                            duration-500
                            hover:bg-gradient-to-br
                            hover:from-amber-50 hover:to-white
                            hover:text-black
                      '>schedule a demo</a>
                  </div>
                  <div className="
                        w-3/5 mt-[15.5vh]
                        flex justify-center
                        ">
                      <span className='
                            text-center
                            text__fill bg-clip-text
                            default__gradient
                            font-bold
                            text-2xl

                      '>
                          USED BY AMAZING COMPANIES WORLDWIDE
                      </span>
                  </div>
                  <div className="flex mt-2">
                      <SVG svg_src='https://www.svgrepo.com/show/429496/arrow-circle-direction-6.svg' text={'Company'}/>
                      <SVG svg_src='https://www.svgrepo.com/show/429495/arrow-circle-direction-3.svg' text={'Company'}/>
                      <SVG svg_src='https://www.svgrepo.com/show/429495/arrow-circle-direction-3.svg' text={'Company'}/>
                      <SVG svg_src='https://www.svgrepo.com/show/429506/arrow-circle-direction-2.svg' text={'Company'}/>
                  </div>
              </div>
          </div>
          </div>
          <div className='
                      flex justify-center items-center flex-col
          '>
              <Features/>
          </div>
      </div>
  );
};

export default IndexPage;
