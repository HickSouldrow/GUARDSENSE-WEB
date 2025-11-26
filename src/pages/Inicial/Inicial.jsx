import React from 'react';
import {HeroSection, FeaturesSection, FeaturesGrid, AppImageLeft, AppImageRight, NewPromoInstall, FinalCallToAction} from '../../components/';

const Inicial = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden ">
      
      <HeroSection />

      <AppImageLeft />

      <FeaturesGrid />

      <NewPromoInstall />
      
      <AppImageRight />

      <FeaturesSection />

      <FinalCallToAction />

    </div>
  );
};

export {Inicial};