import React from "react";
import "./Nav.scss";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const data = [
    "Xidmətlər",
    "Portfolio",
    "Əlaqə",
    "Haqqımızda",
    "Məzunlarımız",
    "Təlimçilər",
    "Proqramlar",
  ];

  const [isAgency, setIsAgency] = useState(true);
  const navigate = useNavigate();
  const navMainBtn = useRef();

  const navImg = useRef();
  const navLinks = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });

  useEffect(() => {
    tl.fromTo(navImg.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
    tl.fromTo(navLinks.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 });
  }, [isAgency]);

  const changeNavHandle = () => {
    if (isAgency === true) {
      navMainBtn.current.innerText = "Agency";
      setIsAgency(false);
      navigate("/academy");
    } else {
      navMainBtn.current.innerText = "Academy";
      setIsAgency(true);
      navigate("/");
    }
  };

  const MenuClicked = () => {
    const menuIcon = document.querySelector(".hamburger");
    const sideNav = document.querySelector(".side-nav-menu");

    menuIcon.classList.toggle("x");
    sideNav.classList.toggle("openClosesideNav");
  };

  function SideMenuLinkClicked(subMenuId) {
    const subSideMenu = document.getElementById(subMenuId);
    const allSubSideMenu = document.querySelectorAll(".sideNav-sublink-c");

    if (subSideMenu.classList.contains("show")) {
      subSideMenu.classList.toggle("show");
    } else {
      allSubSideMenu.forEach((item) => {
        item.classList.remove("show");
      });
      subSideMenu.classList.toggle("show");
    }
  }

  const NavigateHandle = (direction, status) => {
    MenuClicked();
    if (status !== isAgency) {
      changeNavHandle();
    }
    navigate(`/${direction}`);
  };

  return (
    <div className="nav-s">
      <div className="nav-c">
        <div className="nav-left">
          {isAgency ? (
            <Link to="/">
              <img ref={navImg} src="/main_img/adams_main_logo.svg" alt="" />
            </Link>
          ) : (
            <Link to="/academy">
              <img ref={navImg} src="/main_img/logo_academy.svg" alt="" />
            </Link>
          )}
          {isAgency ? (
            <ul ref={navLinks}>
              <Link to="/services">
                <li>Xidmətlər</li>
              </Link>
              <Link to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="/contact">
                <li>Əlaqə</li>
              </Link>
              <Link to="/about">
                <li>Haqqımızda</li>
              </Link>
            </ul>
          ) : (
            <ul ref={navLinks}>
              <Link to="/programs">
                <li>Proqramlar</li>
              </Link>
              <Link to="/mentors">
                <li>Təlimçilər</li>
              </Link>
              <Link to="/students">
                <li>Məzunlarımız</li>
              </Link>
            </ul>
          )}
        </div>
        <div className="nav-right">
          <button ref={navMainBtn} onClick={changeNavHandle}>
            Academy
          </button>
          <div className="inpt-c">
            <input id="searhInpt" type="text" placeholder="Axtarış . . ." />
          </div>
          <div onClick={MenuClicked} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className="side-nav-menu">
          <ul className="sidenav-user-links-c">
            <li className="sideNav-link-c">
              <div
                className="sideNav-link"
                onClick={() => SideMenuLinkClicked("sidesub3")}
              >
                <span className="sidenav-linkName">Adam's Agency</span>
                <FiChevronDown />
              </div>
              <ul id="sidesub3" className="sideNav-sublink-c">
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("services", true)}
                >
                  Xidmətlər
                </li>
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("portfolio", true)}
                >
                  Portfolio
                </li>
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("contact", true)}
                >
                  Əlaqə
                </li>
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("about", true)}
                >
                  Haqqımızda
                </li>
              </ul>
            </li>

            <li className="sideNav-link-c">
              <div
                className="sideNav-link"
                onClick={() => SideMenuLinkClicked("sidesub2")}
              >
                <span className="sidenav-linkName">Adams's Academy</span>
                <FiChevronDown />
              </div>
              <ul id="sidesub2" className="sideNav-sublink-c">
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("programs", false)}
                >
                  Proqramlar
                </li>
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("mentors", false)}
                >
                  Təlimçilər
                </li>
                <li
                  className="sideNav-sublink"
                  onClick={() => NavigateHandle("students", false)}
                >
                  Məzunlarımız
                </li>
              </ul>
            </li>

            <div className="submenus-line"></div>

            <h3 className="sideNav-link-header">Bizi izlə</h3>
            <ul className="sideNav-socialLinks-c">
              <a
                className="sideNav-socialLink"
                target="blank"
                href="https://www.instagram.com/ucuz.ev/"
              >
                <img src="/socialMedia/icon-facebook.svg"></img>
              </a>
              <a className="sideNav-socialLink">
                <img src="/socialMedia/icon-twitter.svg"></img>
              </a>
              <li className="sideNav-socialLink">
                <img src="/socialMedia/icon-instagram.svg"></img>
              </li>
              <li className="sideNav-socialLink">
                <img src="/socialMedia/icon-pinterest.svg"></img>
              </li>
              <li className="sideNav-socialLink">
                <img src="/socialMedia/icon-youtube.svg"></img>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
