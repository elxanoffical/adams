import "./App.scss";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from './Hooks/ScrollToTop';

import Nav from "./Components/Nav/Nav";

import MainPage from "./Pages/Agency/MainPage/MainPage";
import ContactPage from "./Pages/Agency/ContactPage/ContactPage";
import MentorsPage from "./Pages/Academy/MentorsPage/MentorsPage";
import StudentsPage from "./Pages/Academy/StudentsPage/StudentsPage";
import ErrorPage from "./Pages/Agency/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Agency/PortfolioPage/PortfolioPage";
import AboutPage from "./Pages/Agency/AboutPage/AboutPage";
import ServivesPage from "./Pages/Agency/ServivesPage/ServivesPage";
import SubNavMarketing from "./Components/ServicesComponent/SubNavMarketing/SubNavMarketing";
import SubNavDesign from "./Components/ServicesComponent/SubNavDesign/SubNavDesign";
import SubInfoBox from "./Components/ServicesComponent/SubInfoBox/SubInfoBox";
import ProgramsPage from "./Pages/Academy/ProgramsPage/ProgramsPage";
import AcademyPage from "./Pages/Academy/AcademyPage/AcademyPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <div className="app-s">
        <div className="app-c">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/services" element={<ServivesPage />}>
              <Route path="marketing" element={<SubNavMarketing />}>
                <Route path="social-media-marketing" element={<SubInfoBox dataId="1" />} />
                <Route path="seo-services" element={<SubInfoBox dataId="2"/>} />
                <Route path="e-commecre" element={<SubInfoBox dataId="3"/>} />
              </Route>
              <Route path="design" element={<SubNavDesign />}>
                <Route path="logo-design" element={<SubInfoBox dataId="4"/>} />
                <Route path="brending" element={<SubInfoBox dataId="5"/>} />
                <Route path="web-site" element={<SubInfoBox dataId="6"/>} />
                <Route path="mobile-app" element={<SubInfoBox dataId="7"/>} />
              </Route>
              <Route path="consulting" element={<SubInfoBox dataId="8"/>} />
              <Route path="video-content" element={<SubInfoBox dataId="9"/>} />
              <Route path="crypto-nft" element={<SubInfoBox dataId="10"/>} />
              <Route path="business-course" element={<SubInfoBox dataId="11"/>} />
            </Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/programs" element={<ProgramsPage />}>
              <Route path="/programs" element={<SubInfoBox dataId="12"/>} />
              <Route path="facebookCourse" element={<SubInfoBox dataId="13"/>} />
              <Route path="eCommerceCourse" element={<SubInfoBox dataId="14"/>} />
              <Route path="prManagementCourse" element={<SubInfoBox dataId="15"/>} />
            </Route>
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/students" element={<StudentsPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
