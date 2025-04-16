import React from 'react'
import './SubInfoBox.scss'
import apis from './SubInfoData.json'
import gsap from "gsap";
import {useEffect, useRef } from "react";
import {Link} from 'react-router-dom'


const SubInfoBox = ({dataId}) => {
  const data = apis.find(api=> api.id === dataId)
  const infoHeading = useRef();
  const subLinksC = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });



  useEffect(() => {
    tl.fromTo(subLinksC.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
    console.log('sa')  
  });

 

  return (
    <div className='subInfoBox-c' ref={subLinksC}>
        <h3 ref={infoHeading}>{data.header}</h3>
        <p>{data.text}</p>
        <div className="infoBox-btn-s">
            <button className='btn-green'>Ətraflı Məlumat</button>
            <Link to='/contact'>
              <button className='btn-b-green'>Müraciət et</button>
            </Link>
        </div>
    </div>
  )
}

export default SubInfoBox