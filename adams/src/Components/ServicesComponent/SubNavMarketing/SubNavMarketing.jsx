import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./SubNavMarketing.scss";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const SubNavMarketing = () => {
  const subLinksC = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });

  useEffect(() => {
    tl.fromTo(subLinksC.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 });
  }, []);

  return (
    <div className="subNav-s">
      <ul className="subNav-c" ref={subLinksC}>
        <Link to="social-media-marketing">
          <li className="subNav-link subLink-active">
            <img src="/subNav-icon/subImg_1.svg" alt="" />
            <span>Sosial media marketinq</span>
          </li>
        </Link>
        <Link to="seo-services">
          <li className="subNav-link">
            <img src="/subNav-icon/subImg_2.svg" alt="" />
            <span>SEO xidməti</span>
          </li>
        </Link>
        <Link to="e-commecre">
          <li className="subNav-link">
            <img src="/subNav-icon/subImg_3.svg" alt="" />
            <span>e-Ticarət həlləri</span>
          </li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default SubNavMarketing;
