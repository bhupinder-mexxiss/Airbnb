import React from 'react'
import Banner from '../../Components/Banner/Banner.jsx'
import BrandFeature from '../../Components/BrandFeature/BrandFeature.jsx'
import About from '../../Components/About/About.jsx'
import Feature from '../../Components/Feature/Feature.jsx'
import HowItWorks from '../../Components/Home/HowItWorks.jsx'
import OwnerApp from '../../Components/Home/OwnerApp.jsx'
import ReviewSec from '../../Components/Home/ReviewSec.jsx'
import ShortTerm from '../../Components/Home/ShortTerm.jsx'
import WeList from '../../Components/Home/WeList.jsx'
import FAQ from '../../Components/Home/FAQ.jsx'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BrandFeature/>
      <About/>
      <Feature/>
      <HowItWorks/>
      <OwnerApp/>
      <ReviewSec/>
      <ShortTerm/>
      <WeList/>
      <FAQ/>
    </div>
  )
}

export default Home
