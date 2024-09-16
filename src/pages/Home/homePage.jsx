import React from 'react';
import Banner from '../../components/Banner/banner';
import AnalyticsCardSection from '../../components/AnalyticsCard/analyticsCardSection';
import ProfitAssurance from '../../components/AboutPoints/aboutPoints';
import SectionedBackground from '../../components/BackgroundSection/backgroundSection';
import PromoSection from '../../components/TiltleText/titleText';
import TestimonialsSection from '../../components/TestimonialSection/testimonialSection';
import ConferenceSection from '../../components/ConferenceSection/conferenceSection';

const HomePage = () => {
  return (
    <>
      <Banner />
      <AnalyticsCardSection />
      <ProfitAssurance />
      <SectionedBackground />
      <PromoSection />
      <TestimonialsSection />
      <ConferenceSection />
    </>
  );
};

export default HomePage;
