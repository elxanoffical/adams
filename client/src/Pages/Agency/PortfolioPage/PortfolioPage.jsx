import React from 'react'
import './PortfolioPage.scss'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect , useRef} from 'react';
import Animation from '../../../Animations/Animation';

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger)
    const txt = useRef()
    const card1 = useRef()
    const card2 = useRef()
    const card3 = useRef()
    const card4 = useRef()
    const card5 = useRef()
    const card6 = useRef()
  
    useEffect(()=>{
      Animation(txt.current,0,0,0,0,0,1)
      Animation(card1.current,0,0,20,0,0,1)
      Animation(card2.current,0,0,20,0,0,1)
      Animation(card3.current,0,0,20,0,0,1)
      Animation(card4.current,0,0,20,0,0,1)
      Animation(card5.current,0,0,20,0,0,1)
      Animation(card6.current,0,0,20,0,0,1)
    })
  return ( 
    <div className='portfolio-c'>
        <p ref={txt}>Portfolio və görmüş olduğumuz işlərlə aşağıdakı bölmələrə daxil olaraq tanış ola bilərsiniz.</p>
        <div className='portfolio-card-s'>
            <div ref={card1} className="portfolio-card">
                <img src="/portfolio_img/porfolio_1.svg" alt="" />
            </div>
            <div ref={card2} className="portfolio-card">
                <img src="/portfolio_img/porfolio_2.svg" alt="" />
            </div>
            <div ref={card3} className="portfolio-card">
                <img src="/portfolio_img/porfolio_3.svg" alt="" />
            </div>
            <div ref={card4} className="portfolio-card">
                <img src="/portfolio_img/porfolio_4.svg" alt="" />
            </div>
            <div ref={card5} className="portfolio-card">
                <img src="/portfolio_img/porfolio_5.svg" alt="" />
            </div>
            <div ref={card6} className="portfolio-card">
                <img src="/portfolio_img/porfolio_6.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Portfolio