import React from "react";
import Layout from "../components/Layout/Layout";
import "../App.css";
import license3 from "../../src/assets/license3.png";

const About = () => {
  return (
    <Layout title={"Savingo Driving School | About us"}>
      <>
        <div className="liceimg">
          <img src={license3} alt="" />
        </div>
        <div className="body">
          <div id="wrap" className="home">
            <div id="content">
              <section className="process">
                <div className="container">
                  <div className="start">
                    <ul className="row">
                      <li>
                        <div className="lefts_one">
                          <div className="adjust">
                            <div className="col-md-12 aboutschool">
                              <div className="section-header text-center pb-3">
                                <h2>Who we are ?</h2>
                                <p>
                                  Savingo Driving School started in 2010 by Mr.
                                  T.D.K. Kumara. Soon after it became a very
                                  trusted Government Registered Driving school
                                  in Galle area as well as the Southern
                                  District. Professional &amp; Qualified
                                  Instructor is always with you in this journey.
                                  As a Leading Driving School in Galle, We give
                                  you a better train to pass your driving test
                                  as well as we make you a disciplined &amp;
                                  responsible driver.
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12 aboutschool">
                              <div className="section-header text-center pb-3">
                                <h2>Something About the Instructor</h2>
                                <p>
                                  Mr. T.D.K. Kumara is being a Former Senior
                                  Instructor with 10 years of experience in
                                  training of Driving Instructors and Drivers of
                                  Sri Lanka Transport Board (S.L.T.B.) Training
                                  College in Kaluthara, Armed Forces &amp;
                                  Police Department. He has even won a National
                                  Award of "The Most Decent &amp; Best Driver in
                                  Sri Lanka" as a driver.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="adjust">
                            <div className="col-md-12 aboutschool">
                              <div className="section-header text-center pb-3">
                                <h2>Why we are Special ?</h2>
                                <p>
                                  Getting your Driving License is a milestone in
                                  your life. Since the moment you sit on the
                                  driver position our concentrate on you to
                                  train &amp; improve your driving skills. We
                                  have great instructor who will teach you easy
                                  tips to get though your driving practical test
                                  on the first attempt. You may be a just after
                                  18 or a busy person with your work. That’s why
                                  we offer flexible training hours to you to get
                                  your license easily. All vehicles are
                                  comfortable &amp; well maintained. Trainings
                                  will not happen on prepared roads on a silent
                                  area. All the trainings will do on public
                                  streets &amp; roads to make you a road ready
                                  driver.
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12 aboutschool">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.772656566006!2d80.1624071!3d6.2935808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f7b32cc45dd%3A0x29ccaceb3d931519!2sSavingo%20Driving%20School!5e0!3m2!1sen!2slk!4v1696622224971!5m2!1sen!2slk"
                                className="gmap"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                            </div>
                          </div>
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
    </Layout>
  );
};

export default About;
