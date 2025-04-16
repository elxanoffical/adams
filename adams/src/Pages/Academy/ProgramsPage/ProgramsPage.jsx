import React from "react";
import "../../../Components/ServicesComponent/SubNavMarketing/SubNavMarketing.scss";
import { Link, Outlet } from "react-router-dom";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const ProgramsPage = () => {
  const subLinksC = useRef()
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });
  const navigate = useNavigate()
  useEffect(() => {
    tl.fromTo(subLinksC.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 });
  },[]);

  const NavigateSubLink = (link,index) => {
    let links = document.querySelectorAll(".subNav-link");
    links.forEach((item) => item.classList.remove("selected-sublink"));
    links[index].classList.add("selected-sublink");
    navigate(`${link}`);
  }

  return (
    <div className="subNav-s">
      <ul className="subNav-c" ref={subLinksC}>
        <li
          onClick={() => NavigateSubLink("", 0)}
          className="subNav-link selected-sublink"
        >
          <img src="/programs-icon/youtube-icon.svg" alt="" />
          <span>YouTube kursları</span>
        </li>
        <li
          onClick={() => NavigateSubLink("facebookCourse", 1)}
          className="subNav-link"
        >
          <img src="/programs-icon/facebook-icon.svg" alt="" />
          <span>Facebook kursları</span>
        </li>
        <li
          onClick={() => NavigateSubLink("eCommerceCourse", 2)}
          className="subNav-link"
        >
          <img src="/programs-icon/e-commerce-icon.svg" alt="" />
          <span>e-Ticarət Təlim Proqramı</span>
        </li>
        <li
          onClick={() => NavigateSubLink("prManagementCourse", 3)}
          className="subNav-link"
        >
          <img src="/programs-icon/pr-icon.svg" alt="" />
          <span>PR Manager Təlim Proqramı</span>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProgramsPage;
