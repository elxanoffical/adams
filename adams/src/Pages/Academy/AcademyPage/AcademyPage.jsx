import React from "react";
import "./AcademyPage.scss";

import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Animation from "../../../Animations/Animation";

const AcademyPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainLeft = useRef();
  const mainRight = useRef();
  const cards = useRef();

  useEffect(() => {
    Animation(mainLeft.current, -30, 0, 0, 0, 0, 1);
    Animation(mainRight.current, 30, 0, 0, 0, 0, 1);
    Animation(cards.current,0,0,30,0,0,1)
  }, []);

  return (
    <div className="mainP-s">
      <div className="mainP-c">
        <div className="section sec-header">
          <div className="sec-text" ref={mainLeft}>
            <h1>
              <span>sizin xəyallarınız bizim imkanlarımızdır...</span>
            </h1>
            <p>
              Sizin üçün ilk addım bir mesaj və ya zəng qədər yaxındır. YouTube,
              SMM, PR, Facebook Ads, Motion Design, Kriptovalyuta kurslarımıza
              qatıl, zirvəyə doğru addımlamağın dadını çıxar.
            </p>
            <Link to="/contact">
              <button>Müraciət et</button>
            </Link>
          </div>
          <div className="sec-img img-toCenter" ref={mainRight}>
            <img src="/mainP_img/main1.svg" alt="" />
          </div>
        </div>
        <div className="academy-twoCards" ref={cards}>
          <div className="academyCard">
            <img src="/academy/academy_card1.svg" alt="" />
            <h2>Başlamaq</h2>
            <p>
              Başlamaq hər bir işin çətin tərəfidir. Xüsusilə mövzu karyera və
              ya biznes qurmaq olanda əksər insanlar hərəkətə keçməkdə çətinlik
              çəkir. Lakin o ilk addımı atdıqdan sonra hər şey rahat, öz axarı
              ilə davam edir.{" "}
            </p>
          </div>
          <div className="academyCard">
            <img src="/academy/academy_card2.svg" alt="" />
            <h2>Dəvət edirik</h2>
            <p>
              Sizi yeni peşə öyrənməyə dəvət edirik! Proqramlarımız aşağıdakılar
              üçün uyğundur: Sahəyə yeni başlayanlar; Yeni peşə öyrənmək
              istəyənlər; Evdən çalışmaq istəyənlər; Öz biznesini açmaq
              istəyənlər.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;
