import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import News from '../components/News'
import Featured from '../components/Featured'
import Awards from '../components/Awards'
import Certificate from '../components/Certificate'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import AutoPlaySlider from '../components/AutoPlaySlider'
import Services from '../components/Services'
import VideoTest from '../components/VideoTest'
import Faq from '../components/Faq'
import Pricing from '../components/Pricing'
// import Video from '../components/Video'


const Home = () => {
  return (
    <>
    <Navbar/>

    <Hero />
    <News />
    <Services />
    <AutoPlaySlider />  
    {/* <Featured /> */}
    <Awards />
    <Certificate/>
    {/* <Testimonials /> */}
    <VideoTest />
    <Stats />
    <Pricing />
    <Faq />
    <Footer />
    {/* <Video /> */}
    </>
  )
}

export default Home