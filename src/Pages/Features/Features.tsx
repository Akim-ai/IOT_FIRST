import React, { FC } from 'react';
import {Card} from "../../components";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = (props) => {

  return (
      <div className='
            w-screen min-h-screen
            flex flex-col items-center
            pt-[10vh]
            pb-[10vh]
            border-b-gray-600
            border-b-2
      '>
          <h5 className='
                text-gray-500
                text-xl
                font-black
          '>
              FEATURES
          </h5>
          <h2 className='
                pt-10
                w-3/5
                default__gradient
                text__fill bg-clip-text
                w-fit h-fit
                font-Arab

                font-black
                text-6xl
                text-center
          '>
              ACTIONABLE ANALYTICS FOR YOUR BUSINESS
          </h2>
          <h5 className='
                text-gray-300
                w-2/5 text-center
                text-xl
                pt-4 mb-8
          '>
With SAASPIENCE, you have access to valuable data from your website, web-app or mobile app at a glance.
          </h5>
          <table className='
                max-w-4xl
                mt-10
          '>
              <tr className='
                    flex flex-row
              '>

                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                       img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f4596f602432f59f6911_vector1.svg'
                  />
                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                      img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f47a6f6024342b9f6a4d_vector2.svg'
                  />
                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                      img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f4faf7e7dd82fe6142e7_vector3.svg'
                  />
              </tr>
              <tr className='
                   flex flex-row
'             >
                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                      img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f512b5d931f0313c3ab5_vector4.svg'
                  />
                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                      img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f525257c181c0b0ee36c_vector5.svg'
                  />
                  <Card
                      title='lorem imps' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                      img_src='https://assets.website-files.com/611f5a914d4fd889d0ab6c60/61b2f53a3947370fcab0a690_vector6.svg'
                  />
              </tr>
          </table>
      </div>
  );
};

export default Features;
