import React from 'react'
import Hero from '../whychooseus/Hero'
import WhychooseusFeatures from '../whychooseus/Whychooseusfeatures'
import Services from '../whychooseus/Services'
import AIntervene from '../whychooseus/Aintervene'
import Benefits from '../whychooseus/Benefits'
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

const WhyChooseUS = () => {
  return (
    <div>
      <Hero/>
      <WhychooseusFeatures/>
      <Services/>
      <AIntervene/>
      <Benefits/>
      <Waitlist/>
      <Footer/>
    </div>
  )
}

export default WhyChooseUS
