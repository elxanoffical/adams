import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./ServivesPage.scss"; 
import { useNavigate } from "react-router-dom";
import gsap from 'gsap'
import { useEffect, useRef } from "react";


const ServivesPage = () => {
  const navigate = useNavigate()

  const linksC = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });

  useEffect(()=>{
    tl.fromTo(linksC.current, {opacity:0, y: 20},{opacity:1, y:0 })
  },[])

  const serviceLinkClicked = (linkId,path) => {
      let servLink = document.querySelector(`#${linkId}`)
      let servLinks = document.querySelectorAll(`.service-nav-card`)
      servLinks.forEach(item=>{
        item.classList.remove('active')
      })
      servLink.classList.add('active')
      navigate(`${path}`)
  }


  return (
    <div className="services-c">
      <div className="services-nav" ref={linksC}>
          <div id="servLink1" onClick={() => serviceLinkClicked('servLink1','marketing')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_1.svg" alt="" />
            </div>
            <span>Marketinq</span>
          </div>
          <div id="servLink2" onClick={() => serviceLinkClicked('servLink2','design')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_2.svg" alt="" />
            </div>
            <span>Dizayn</span>
          </div>
          <div id="servLink3" onClick={() => serviceLinkClicked('servLink3','consulting')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_3.svg" alt="" />
            </div>
            <span>Konsaltinq</span>
          </div>
          <div id="servLink4" onClick={() => serviceLinkClicked('servLink4','video-content')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_4.svg" alt="" />
            </div>
            <span>Video kontent</span>
          </div>
          <div id="servLink5" onClick={() => serviceLinkClicked('servLink5','crypto-nft')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_5.svg" alt="" />
            </div>
            <span>Kriptovalyuta & NFT</span>
          </div>
          <div id="servLink6" onClick={() => serviceLinkClicked('servLink6','business-course')} className="service-nav-card">
            <div className="serv-navCard-img-s">
              <img src="/services_icon/services_6.svg" alt="" />
            </div>
            <span>Biznes kursları</span>
          </div>
      </div>
      <div className="services-subNav">
        <Outlet />
      </div>
    </div>
  );
};

export default ServivesPage;
