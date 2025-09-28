import React from 'react';
import { Hero } from './Hero';
import { FeaturedApps } from './FeaturedApps';
import { CtaSection } from './CtaSection';
import { Brands } from './Brands';
import { AiAssistant } from './AiAssistant';
import { Testimonial } from './Testimonial';
import { Stats } from './Stats';
import { CoreValues } from './CoreValues';
import { FinalCta } from './FinalCta';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedApps />
      <CtaSection />
      <Brands />
      <AiAssistant />
      <Testimonial />
      <Stats />
      <CoreValues />
      <FinalCta />
    </>
  );
};

export default HomePage;
