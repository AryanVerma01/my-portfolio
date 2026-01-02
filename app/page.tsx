import HeroSection from '@/components/HeroSection'
import IconBar from '@/components/IconBar'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import GitHubContributions from '@/components/GitHubContributions'
import React from 'react'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'

const Home = () => {

  return (
    <div className="w-full h-screen px-7 md:px-16 lg:px-76 2xl:px-102 selection:bg-white selection:text-black">
        <div className='w-full h-full'>
          <Navbar/>
          <HeroSection/>
          <IconBar/>
          <Projects/>
          <AboutMe/>
          <Skills/>
          <div className='mt-20'>
            <GitHubContributions />
          </div>
        </div>
    </div>
  )
}

export default Home