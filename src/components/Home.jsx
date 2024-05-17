import React from 'react'
import SlidingImages from './SlidingImages';
import Main from './main';
import WhyUsChoose from './whyuschoose';
import Services from './Services';
import Projects from './Ourprojects';
import Master from './master';
export default function Home() {
  return (
    <div> 
    <SlidingImages  />
        <Main  />
        <WhyUsChoose/>
        <Services/>
        <Projects/>
        <Master  />
    
    </div>
  )
}
