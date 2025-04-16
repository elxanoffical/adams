import React from "react";
import "./AboutPage.scss";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Animation from '../../../Animations/Animation';

const AboutPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  const cardsLeft = useRef();
  const cardsRight = useRef();
  const headerText = useRef(); 
  const cards = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });
  
 
  useEffect(()=>{
    tl.fromTo(cardsLeft.current, {opacity:0, y: -40},{opacity:1, y:0 })
    tl.fromTo(cardsRight.current, {opacity:0, y: 40},{opacity:1, y:0 },"<")
    tl.fromTo(headerText.current, {opacity:0, x: 20},{opacity:1, x:0 })
    Animation(cards.current,0,0,30,0,0,1)
  })

  return (
    <div className="aboutP-c"> 
      <div className="aboutUs-c">
        <div className="aboutUs-left">
          <div className="aboutUs-left-column" ref={cardsLeft}>
            <div className="about-box-img"></div>
            <div className="about-box-img"></div>
          </div>
          <div className="aboutUs-right-column" ref={cardsRight}>
            <div className="about-box-img"></div>
            <div className="about-box-img"></div>
          </div>
        </div>
        <div className="aboutUs-right" ref={headerText}>
          <h2>Rəqəmsal Agentliyimiz</h2>
          <p>
            ADAM’S Digital Agency - aparıcı, müstəqil və tam xidmət rəqəmsal
            agentlikdir. Artıq illərdir ki, şirkətlərin yeni rəqəmsal mühitdə
            effektiv iştirakları üçün hər istiqamət üzrə həllər hazırlayır və
            individual strategiyalar ilə markalar üçün rəqəmsal məsləhətçi kimi
            fealiyyət göstəririk. <br /><br /> Effektiv marketinq, təlim və texnologiya
            məhsullarını birləşdirərək müxtəlif miqyaslı müəssisələrin daha
            sürətli müştəri tapmasına və inkişaf etməsinə köməklik edirik. Bu
            sosial şəbəkələrdə marketinqlə məşğul olaraq malların satışının
            təşkil olunmasıdır. Sosial media marketinq bütün marketinq
            növlərinin içərisində ən çox effektivli vasitədir. Onun köməyi ilə
            istifadəçilər müştərinin saytına daxil olaraq bloqlar, hər gün baş
            verən yeniliklər, forumlar və təklif edilən məntəqələr barədə
            məlumat toplaya bilir. Sosial Media Marketinqdə reklam paylaşaraq
            istənilən qədər müştəri toplamaq mümkündür.
          </p>
        </div>
      </div>
      <div className="aboutActivity-c" ref={cards}>
        <h1>Fəaliyyətimiz</h1>
        <div className="activity-s">
            <div className="activity-card">
                <img src="/about_icon/activity_icon.svg" alt="" />
                <div className="activity-txt-s">
                    <h3>Keyfiyyətli xidmət</h3>
                    <p>Brendinq (branding) sizin xüsusi imicinizdir ki, digərlərindən seçilmək və fərqlənmək üçün əla imkan yaradır.</p>
                </div>
            </div>
            <div className="activity-card">
                <img src="/about_icon/activity_icon2.svg" alt="" />
                <div className="activity-txt-s">
                    <h3>Kurslar</h3>
                    <p>Brendinq (branding) sizin xüsusi imicinizdir ki, digərlərindən seçilmək və fərqlənmək üçün əla imkan yaradır.</p>
                </div>
            </div>
            <div className="activity-card">
                <img src="/about_icon/activity_icon3.svg" alt="" />
                <div className="activity-txt-s">
                    <h3>Biznes təlimləri</h3>
                    <p>Brendinq (branding) sizin xüsusi imicinizdir ki, digərlərindən seçilmək və fərqlənmək üçün əla imkan yaradır.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
