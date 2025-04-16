import React from "react";
import "../SubNavMarketing/SubNavMarketing.scss";
import { Link, Outlet } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const SubNavMarketing = () => {

  const subLinksC = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });

  useEffect(() => {
    tl.fromTo(subLinksC.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 });
    console.log('as')
  });

  return (
    <div className="subNav-s">
      <ul className="subNav-c" ref={subLinksC}>
        <Link to='logo-design'>
          <li className="subNav-link subLink-active">
            <img src="/subNav-icon/subImg_1.svg" alt="" />
            <span>Logo dizayn</span>
          </li>
        </Link>
        <Link to='brending'>
        <li className="subNav-link">
          <img src="/subNav-icon/subImg_2.svg" alt="" />
          <span>Brendinq</span>
        </li>
        </Link>
        <Link to='web-site'>
        <li className="subNav-link">
          <img src="/subNav-icon/subImg_3.svg" alt="" />
          <span>Veb-sayt</span>
        </li>
        </Link>
        <Link to='mobile-app'>
        <li className="subNav-link">
          <img src="/subNav-icon/subImg_3.svg" alt="" />
          <span>Mobil app</span>
        </li>
        </Link>
      </ul>
      <Outlet/>
    </div>
  );
};

export default SubNavMarketing;
