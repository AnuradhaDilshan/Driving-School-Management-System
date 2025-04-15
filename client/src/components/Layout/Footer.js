import React from "react";
import footer_logo from "./../../assets/footer_logo.png";
import { NavLink } from "react-router-dom";
import "../../.././src/App.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <img src={footer_logo} alt="" />
              <p>Government Approved Grade "B" Learners</p>
              <div className="footer-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100068924735662"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://x.com/Anuradha_Dil?t=SJjkxrQf-EK4seoBkn7Asw&s=09"
                  target="_blank"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/anuradha_dilshan/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVviu3NhADPZ-GFdRYaaBMw"
                  target="_blank"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anuradha-dilshan-86a7771ab/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <NavLink to="/services" onClick={scrollToTop}>
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/journey" onClick={scrollToTop}>
                    Journey
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gallery" onClick={scrollToTop}>
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" onClick={scrollToTop}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/instructors" onClick={scrollToTop}>
                    Instructors
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5 className="contact">Contact Us</h5>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                {"City Bypass Road, Elpitiya"}
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>
                {"0915010025"}
                <br />
                <p className="phone">
                  {"0729331679"}
                  <br />
                  {"0778719826"}
                </p>
              </p>
              <p className="mail">
                <i class="fa-solid fa-envelope"></i>
                {"savingolearners@gmail.com"}
              </p>
              <p>
                <i class="fa-solid fa-check"></i>
                {"Reg. No: D/S 828"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>© {year} Developed by Yellow Wizards IT Solutions.</p>
      </div>
    </>
  );
};

export default Footer;
