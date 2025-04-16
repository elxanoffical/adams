import React from "react";
import "./MainPage.scss";
import gsap from "gsap";
import {Link} from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Animation from "../../../Animations/Animation";

const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainLeft = useRef();
  const mainRight = useRef();
  const secLeft = useRef();
  const secRight = useRef();
  const thirdLeft = useRef();
  const thirdRight = useRef();
  const fourthLeft = useRef();
  const fourthRight = useRef();
  useEffect(() => {
    Animation(mainLeft.current, -30, 0, 0, 0, 0, 1);
    Animation(mainRight.current, 30, 0, 0, 0, 0, 1);

    Animation(secLeft.current, -30, 0, 0, 0, 0, 1);
    Animation(secRight.current, 30, 0, 0, 0, 0, 1);

    Animation(thirdLeft.current, -30, 0, 0, 0, 0, 1);
    Animation(thirdRight.current, 30, 0, 0, 0, 0, 1);

    Animation(fourthLeft.current, -30, 0, 0, 0, 0, 1);
    Animation(fourthRight.current, 30, 0, 0, 0, 0, 1);
  }, []);

  return (
    <div className="mainP-s">
      <div className="mainP-c">
        <div className="section sec-header">
          <div className="sec-text" ref={mainLeft}>
            <h1>
              <span>sərhəd tanımırıq.</span>
            </h1>
            <p>
              ADAM’S Digital Agency - aparıcı, müstəqil və tam xidmət rəqəmsal
              agentlikdir. Artıq illərdir ki, şirkətlərin yeni rəqəmsal mühitdə
              effektiv iştirakları üçün hər istiqamət üzrə həllər hazırlayırıq.
            </p>
            <Link to="/contact">
              <button>Müraciət et</button>
            </Link>
          </div>
          <div className="sec-img img-toCenter">
            <img src="/mainP_img/main_1.svg" ref={mainRight} alt="" />
          </div>
        </div>

        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img
                src="portfolio_img/porfolio_1.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_2.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_3.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_4.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_5.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_6.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_1.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_2.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_3.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_4.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_5.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_6.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_1.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="portfolio_img/porfolio_2.svg"
                height="180"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="section ">
          <div className="sec-text" ref={secLeft}>
            <h1>
              <span>Müasir veb sayt</span> sizin biznesin inkişafına təkan verə
              biləcək əsas məqamdır.
            </h1>
            <Link to="/contact">
              <button>Daha ətraflı</button>
            </Link>
          </div>
          <div className="sec-img img-toEnd" ref={secRight}>
            <img src="/mainP_img/main_2.svg" alt="" />
          </div>
        </div>
        <div className="section ">
          <div className="sec-text" ref={thirdLeft}>
            <h1>
              Müxtəlif növ{" "}
              <span>dizayn materiallarının hazırlanmasını təklif edirik.</span>
            </h1>
            <Link to="/contact">
              <button>Daha ətraflı</button>
            </Link>
          </div>
          <div className="sec-img img-toEnd" ref={thirdRight}>
            <img src="/mainP_img/main_3.svg" alt="" />
          </div>
        </div>
        <div className="section ">
          <div className="sec-text" ref={fourthLeft}>
            <h1>
              Müasir həyat tərzinin ayrılmaz parçası olan{" "}
              <span>
                Mobil APP-ların hazırlanmasını bizə etibar edə bilərsiniz.
              </span>
            </h1>
            <Link to="/contact">
              <button>Daha ətraflı</button>
            </Link>
          </div>
          <div className="sec-img img-toCenter" ref={fourthRight}>
            <img src="/mainP_img/main_4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
