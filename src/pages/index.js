import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/about/About'
import Bener from '../components/Bener/Bener'
import Colaborate from '../components/Colaborate/Colaborate'
import Work from '../components/Work/Work'
import BgBener from '../components/BgBener/BgBener'
import TabSection from '../components/TabSection.jsx/TabSection'
import TabTimes from '../components/TabTimes/TabTimes'
import BenerCompenies from '../components/BenerCompenies/BenerCompenies'
import Testimonial from '../components/Testimonial/Testimonial'

const AppPage = () => {
    return (
        <div className='w-[100%] bg-whiteDark'>
            <Navbar />
            <About />
            <Bener />
            <Colaborate />
            <Work />
            <BgBener />
            <TabSection />
            <TabTimes />
            <BenerCompenies />
            <Testimonial />
        </div>
    )
}

export default AppPage