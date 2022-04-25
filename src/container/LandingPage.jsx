import React from 'react';

import { Navbar, SearchBox } from '../components';
import { withTranslation } from 'react-i18next';

const LandingPage = ({ t }) => {
  
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dmgfxu4fg/image/upload/v1649259188/WhatsApp_Image_2022-04-06_at_5.24.21_PM_mqnrhn.jpg')",
  };

    return (
      <div className="md:w-full md:h-screen h-fit">
        <div
          style={myStyle}
          className="w-full h-full bg-no-repeat bg-cover bg-[#C4C4C4] absolute"
        >
          <Navbar />
        </div>
        <div className="max-w-[1240px] mx-auto text-black relative">
          <div className="py-24 md:px-[7%] px-[10%] md:py-44">
            <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl">
              {t('landingPage.welcome_message')}
            </h1>
            <p className="pt-8 text-xl font-medium md:text-4xl sm:text-3xl text-white">
              {t('landingPage.span')} <span className="text-yellow-400">PHANTOM</span> {t('landingPage.pTag1')}
            </p>
            <p className="text-xxl font-medium md:text-4xl sm:text-3xl text-white">
            {t('landingPage.pTag2')}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <SearchBox />
        </div>
            </div>
        )
    }

export default withTranslation()(LandingPage);
