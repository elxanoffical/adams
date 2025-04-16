import React from 'react'
import './Footer.scss'

import {Link} from 'react-router-dom'

const Footer = () => {
  return ( 
    <div className='footer-c'>
        <img className='footer-logo' src="/main_img/adams_main_logo.svg" alt="" />
        <ul className='footer-nav'>
              <Link to='/services'><li>Xidmətlər</li></Link>
              <Link to='/portfolio'><li>Portfolio</li></Link>
              <Link to='/contact'><li>Əlaqə</li></Link>
              <Link to='/about'><li>Haqqımızda</li></Link>
        </ul>
        <ul className='footer-socicalNav'>
            <div className='footer-link-c'><img src="/socialMedia_icons/footer-facebook.svg" alt="" /></div>
            <div className='footer-link-c'><img src="/socialMedia_icons/footer_instagram.svg" alt="" /></div>
            <div className='footer-link-c'><img src="/socialMedia_icons/footer_linkedin.svg" alt="" /></div>
            <div className='footer-link-c'><img src="/socialMedia_icons/footer_tiktok.svg" alt="" /></div>
        </ul>
    </div>
  )
}

export default Footer