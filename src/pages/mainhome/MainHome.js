import React from 'react'
import MainBanner from '../../component/banner/MainBanner'
import AboutTheShelter from '../../component/about/AboutTheShelter'
import Help from '../../component/help/Help'
import ContactUs from '../../component/contact/ContactUs'
import HomePets from '../../component/ourpets/HomePets'

function MainHome() {
  return (
    <div>
      <MainBanner />
      <AboutTheShelter />
       <HomePets/>
    <Help />
      <ContactUs/>
    </div>
  )
}

export default MainHome