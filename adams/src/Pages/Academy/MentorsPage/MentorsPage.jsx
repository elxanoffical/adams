import React from "react";
import "./MentorsPage.scss";
import gsap from 'gsap'
import { useEffect, useRef } from "react";

const MentorsPage = () => {
  const cardHeader = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });
  
 
  useEffect(()=>{
    tl.fromTo(cardHeader.current, {opacity:0},{opacity:1 })
    tl.fromTo(card1.current, {opacity:0, scale: .9, y: -20},{opacity:1,scale: 1, y:0 })
    tl.fromTo(card2.current, {opacity:0, scale: .9, y: -20},{opacity:1,scale: 1, y:0 },'<')
    tl.fromTo(card3.current, {opacity:0, scale: .9, y: -20},{opacity:1,scale: 1, y:0 },'<')
    tl.fromTo(card4.current, {opacity:0, scale: .9, y: -20},{opacity:1,scale: 1, y:0 },'<')
  },[])

  return (
    <div className="mentorsP-c">
      <div className="mentors-header txt-center" ref={cardHeader}>
        <h1>Təlimçilərimiz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          scelerisque venenatis laoreet. Nam velit libero, viverra vel orci non,
          dapibus suscipit dolor. Sed ligula justo, congue non lectus ut,
          pulvinar dapibus diam. Nulla sit amet placerat tellus, ac ultrices
          urna. Integer ut ipsum sed dolor consectetur placerat.
        </p>
      </div>
      <div className="mentors-c">
        <div className="mentor-card" ref={card1}>
          <img className="img-border" src="/mentors_img/mentor1.png" alt="" />
          <h3>Mirsəid Mirzəzadə</h3>
          <p>YouTube instructor</p>
        </div>
        <div className="mentor-card" ref={card2}>
          <img className="img-border" src="/mentors_img/mentor2.png" alt="" />
          <h3>Fərid Talıblı </h3>
          <p>Motion Design</p>
        </div>
        <div className="mentor-card" ref={card3}>
          <img className="img-border" src="/mentors_img/mentor3.png" alt="" />
          <h3>Səmayə Məmmədova</h3>
          <p>PR kursu</p>
        </div>
        <div className="mentor-card" ref={card4}>
          <img className="img-border" src="/mentors_img/mentor4.png" alt="" />
          <h3>Rəşad qafarov</h3>
          <p>Crypto Valyuta dərsləri</p>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;
