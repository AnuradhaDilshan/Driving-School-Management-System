import React, { useEffect } from "react";
import "../../.././src/App.css";
import picture1 from "../../../src/assets/flaticon/1-01.png";
import picture2 from "../../../src/assets/flaticon/8-01.png";
import picture3 from "../../../src/assets/flaticon/6-01.png";
import picture4 from "../../../src/assets/flaticon/13-01.png";
import picture5 from "../../../src/assets/flaticon/14-01.png";
import picture6 from "../../../src/assets/flaticon/10-01.png";
import picture7 from "../../../src/assets/flaticon/12-01.png";
import picture8 from "../../../src/assets/flaticon/4-01.png";
import license from "../../../src/assets/license.png";

const JourneyBody = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="liceimg">
        <img src={license} alt="" />
      </div>
      <div className="body">
        <div id="wrap" className="home">
          <div id="content">
            <section className="process">
              <div className="container">
                <div className="start">
                  <ul className="row">
                    <li>
                      <div className="lefts one">
                        <div className="col-md-12 roadmap">
                          <div className="section-header text-center pb-3">
                            <h2>RoadMap to Getting a Driving License</h2>
                            <p>
                              Embarking on the journey to secure a driver's
                              license is like following a roadmap to newfound
                              freedom and responsibility. This roadmap provides
                              a carefully charted course, starting with
                              understanding different license types and
                              progressing through written tests, learner's
                              permits, practical experience, and finally, the
                              much-anticipated road test. It's a personalized
                              guide that equips individuals with the knowledge
                              and skills needed to navigate the world of driving
                              safely and confidently, ultimately leading to the
                              cherished possession of a driver's license—a key
                              to independence and adventure on the open road.
                            </p>
                          </div>
                        </div>
                        <div className="icon animate fadeInLeft">
                          <img src={picture1} alt="" />
                        </div>
                      </div>
                      <div className="media-body animate">
                        <h4>Check Eligibility</h4>
                        <p>
                          Ensure you meet the minimum age requirement set by for
                          the type of driver's license you want to obtain.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            A minimum age is 18 years for all vehicles
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts two last">
                        <div className="icon animate fadeInLeft">
                          <img src={picture2} alt="" />
                        </div>
                      </div>
                      <div className="media-body last animate">
                        <h4>Select the Right Driving School</h4>
                        <p>
                          Understanding the benefits of professional driving
                          instruction. Ensuring the driving school is licensed
                          by local authorities.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            Savingo Driving School is Government Approved Grade
                            "B" Learners
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts three">
                        <div className="icon animate fadeInLeft">
                          <img src={picture3} alt="" />
                        </div>
                      </div>
                      <div className="media-body animate">
                        <h4>Prepare the documents</h4>
                        <p>
                          Essential documents are a must for getting your
                          driver's license. Key documents like <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            NIC or Passport, Birth Certificate, Medical
                            Certificate, Clear B&W 5 Photos
                          </span>{" "}
                          are must haves for your driver's license journey.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts four last">
                        <div className="icon animate fadeInLeft">
                          <img src={picture4} alt="" />
                        </div>
                      </div>
                      <div className="media-body last animate">
                        <h4>Driver's Education</h4>
                        <p>
                          Consider enrolling in a driver's education course to
                          gain knowledge about Road Signs and prepare for
                          Written Test.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            We have best instructors to provide knowledge about
                            traffic laws, signs, and safe driving practices
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts five">
                        <div className="icon animate fadeInLeft">
                          <img src={picture5} alt="" />
                        </div>
                      </div>
                      <div className="media-body animate">
                        <h4>Driver's Training</h4>
                        <p>
                          After passing the Written Test, you have a learner's
                          permit, Practice driving during various weather and
                          traffic conditions.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            You can get Training Sessions from our professional
                            instructors
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts six last">
                        <div className="icon animate fadeInLeft">
                          <img src={picture6} alt="" />
                        </div>
                      </div>
                      <div className="media-body last animate">
                        <h4>Take a Road Test</h4>
                        <p>
                          Schedule an appointment with the DMT for a road test
                          to demonstrate your driving skills.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            No need to worry about the paper works, We do that
                            works for you
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts seven">
                        <div className="icon animate fadeInLeft">
                          <img src={picture7} alt="" />
                        </div>
                      </div>
                      <div className="media-body animate">
                        <h4>pass the trial exam</h4>
                        <p>
                          After passing the Road Test, you have to wait for
                          Driving License.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            DMT will post your Driving License Card
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="lefts eight last">
                        <div className="icon animate fadeInLeft">
                          <img src={picture8} alt="" />
                        </div>
                      </div>
                      <div className="media-body last ended animate">
                        <h4>Become a driving license holder</h4>
                        <p>
                          Maintain your driver's license by practicing safe
                          driving habits and adhering to traffic laws. Continue
                          to educate yourself on changes in traffic laws or
                          regulations.
                          <br />{" "}
                          <span style={{ backgroundColor: "#f1c807" }}>
                            Savingo Learners will always with your Journey to
                            being licensed driver
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Floating Social Media Icons */}
        <div className="icons">
          <ul>
            <a
              href="https://www.facebook.com/profile.php?id=100068924735662"
              target="_blank"
            >
              <li className="facebook">
                <i className="fa-brands fa-facebook-f" />
              </li>
            </a>
            <a
              href="https://wa.me/94778719826?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
              target="_blank"
            >
              <li className="whatsapp">
                <i className="fa-brands fa-whatsapp" />
              </li>
            </a>
            <a
              href="https://x.com/Anuradha_Dil?t=SJjkxrQf-EK4seoBkn7Asw&s=09"
              target="_blank"
            >
              <li className="twitter">
                <i className="fa-brands fa-x-twitter" />
              </li>
            </a>
            <a
              href="https://www.instagram.com/anuradha_dilshan/"
              target="_blank"
            >
              <li className="instagram">
                <i className="fa-brands fa-instagram" />
              </li>
            </a>
            <a
              href="https://www.youtube.com/channel/UCVviu3NhADPZ-GFdRYaaBMw"
              target="_blank"
            >
              <li className="youtube">
                <i className="fa-brands fa-youtube" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/anuradha-dilshan-86a7771ab/"
              target="_blank"
            >
              <li className="linkedin">
                <i className="fa-brands fa-linkedin-in" />
              </li>
            </a>
          </ul>
        </div>

        {/* BACK TO TOP BUTTON */}
        <a href="#" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
      </div>
    </>
  );
};

export default JourneyBody;
