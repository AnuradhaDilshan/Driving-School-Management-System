import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import "../../.././src/App.css";
import about from "../../assets/about.png";
import lboard from "../../assets/l_board.png";
import pic1 from "./../../assets/services/1.png";
import pic2 from "./../../assets/services/2.png";
import pic3 from "./../../assets/services/3.png";
import pic4 from "./../../assets/services/4.png";
import pic5 from "./../../assets/services/5.png";
import pic6 from "./../../assets/services/6.png";
import team1 from "./../../assets/instructors/team-1.jpg";
import team2 from "./../../assets/instructors/team-2.jpg";
import team3 from "./../../assets/instructors/team-3.jpg";
import team4 from "./../../assets/instructors/team-4.jpg";

const Body = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ev8xam",
        "template_8dxh4ga",
        form.current,
        "6YJGUGx0hkWGoaPse"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* about section starts */}
      <div className="body">
        <section id="about" className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="about-img">
                  <img src={about} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2>
                    We Provide the Best Quality <br /> Services Ever
                  </h2>
                  <p>
                    "At Savingo Driving School, we take immense pride in
                    delivering the absolute best quality services in the world
                    of driver education. Our commitment to excellence is
                    unwavering. We believe that every aspiring driver deserves
                    nothing less than the highest standards of instruction and
                    support. Our team of seasoned instructors brings a wealth of
                    knowledge and experience to the table, ensuring that every
                    lesson is an enriching experience. We use state-of-the-art
                    vehicles and the latest teaching methods, always putting
                    safety first. Your journey with us isn't just about
                    acquiring a driver's license; it's about gaining the
                    confidence and skills to navigate the road with expertise.
                    Join us, and experience the pinnacle of driving education –
                    where quality meets the road."
                  </p>
                  <NavLink to="/gallery" className="btn btn-warning">
                    Visit Gallery
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section Ends */}

        {/* services strats */}
        <section id="services" className="services section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-3">
                  <h2>Our Services</h2>
                  <p>Explore Our Comprehensive Offerings</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-light text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={pic1} alt="" className="img-fluid" />
                    </div>
                    <h4 className="card-title">Beginner's Driving Lessons</h4>
                    <p className="lead">
                      Our beginner's driving lessons are perfect for those who
                      are just starting their journey behind the wheel. We
                      provide a solid foundation in driving skills and safety
                      for new learners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-light text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={pic2} alt="" className="img-fluid" />
                    </div>
                    <h4 className="card-title">Flexible Scheduling</h4>
                    <p className="lead">
                      Life can be busy, and we understand that. Our driving
                      school offers flexible scheduling options, allowing you to
                      learn at your own pace and fit lessons into your schedule.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-light text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={pic3} alt="" className="img-fluid" />
                    </div>
                    <h4 className="card-title">Affordable Packages</h4>
                    <p className="lead">
                      Quality driver education should be affordable. That's why
                      we provide competitive pricing and customizable packages
                      to make learning to drive accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec_row">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="card text-light text-center bg-white pb-2">
                    <div className="card-body text-dark">
                      <div className="img-area mb-4">
                        <img src={pic4} alt="" className="img-fluid" />
                      </div>
                      <h4 className="card-title">License Test Preparation</h4>
                      <p className="lead">
                        We offer comprehensive preparation to ensure you're
                        fully ready for your driver's license test. Our
                        instructors will guide you through both the practical
                        and theoretical aspects, boosting your chances of
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="card text-light text-center bg-white pb-2">
                    <div className="card-body text-dark">
                      <div className="img-area mb-4">
                        <img src={pic5} alt="" className="img-fluid" />
                      </div>
                      <h4 className="card-title">Experienced Instructors</h4>
                      <p className="lead">
                        Our team of experienced and friendly instructors is
                        dedicated to your success and safety. They create a
                        comfortable and encouraging learning environment to
                        ensure you become a skilled and confident driver.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="card text-light text-center bg-white pb-2">
                    <div className="card-body text-dark">
                      <div className="img-area mb-4">
                        <img src={pic6} alt="" className="img-fluid" />
                      </div>
                      <h4 className="card-title">Advanced Driver Training</h4>
                      <p className="lead">
                        For experienced drivers looking to enhance their skills,
                        our advanced driver training programs focus on defensive
                        driving techniques, advanced maneuvering, and navigating
                        complex traffic scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services ends */}

        {/* team starts */}
        <section className="team section-padding" id="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-4">
                  <h2>Our Instructors</h2>
                  <p>Meet the Driving Experts</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={team1}
                      alt=""
                      className="img-fluid rounded-circle with-shadow"
                    />
                    <h4 className="card-title py-2">Kithsiri Kumara</h4>
                    <p className="card-text">
                      We're your driving mentors, here to make you a confident,
                      safe driver. With us, you'll master the road with expert
                      guidance.
                    </p>
                    <p className="socials">
                      <a
                        href="https://www.facebook.com/kithsiri.kumara.501"
                        target="_blank"
                      >
                        <i className="bi bi-facebook text-dark mx-1" />
                      </a>
                      <a
                        href="https://wa.me/94778719826?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
                        target="_blank"
                      >
                        <i className="bi bi-whatsapp text-dark mx-1" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={team2}
                      alt=""
                      className="img-fluid rounded-circle with-shadow"
                    />
                    <h4 className="card-title py-2">Anuradha Dilshan</h4>
                    <p className="card-text">
                      Safety is paramount. Our instructors teach, and empower
                      you to become a skilled driver. Join us on your driving
                      journey.
                    </p>
                    <p className="socials">
                      <a
                        href="https://www.facebook.com/profile.php?id=100009510139695"
                        target="_blank"
                      >
                        <i className="bi bi-facebook text-dark mx-1" />
                      </a>
                      <a
                        href="https://wa.me/94719326810?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
                        target="_blank"
                      >
                        <i className="bi bi-whatsapp text-dark mx-1" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anuradha-dilshan-86a7771ab/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark mx-1" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={team3}
                      alt=""
                      className="img-fluid rounded-circle with-shadow"
                    />
                    <h4 className="card-title py-2">Shehan Wijethunga</h4>
                    <p className="card-text">
                      Learning to drive is a milestone, and we're here to make
                      it easy. Gain skills and confidence with us. Let's hit the
                      road together!
                    </p>
                    <p className="socials">
                      <a
                        href="https://wa.me/94772249755?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
                        target="_blank"
                      >
                        <i className="bi bi-whatsapp text-dark mx-1" />
                      </a>
                      <a
                        href="https://www.instagram.com/shehan_y2j/"
                        target="_blank"
                      >
                        <i className="bi bi-instagram text-dark mx-1" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={team4}
                      alt=""
                      className="img-fluid rounded-circle with-shadow"
                    />
                    <h4 className="card-title py-2">Neelya Samarasinghe</h4>
                    <p className="card-text">
                      Welcome to Savingo Driving School, where we shape
                      responsible drivers. Join us today and drive towards
                      success.
                    </p>
                    <p className="socials">
                      <a
                        href="https://www.facebook.com/profile.php?id=100083775325290"
                        target="_blank"
                      >
                        <i className="bi bi-facebook text-dark mx-1" />
                      </a>
                      <a
                        href="https://wa.me/94766369590?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
                        target="_blank"
                      >
                        <i className="bi bi-whatsapp text-dark mx-1" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/neelya-samarasinghe-08229027b/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark mx-1" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team ends */}

        {/* Contact starts */}
        <section id="contact" className="contact section-padding">
          <div className="container mt-1 mb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-4">
                  <h2>Contact Us</h2>
                  <p>We're Here to Help</p>
                </div>
              </div>
            </div>

            {/* Combine the image and form in one row */}
            <div className="row">
              <div className="row single-form g-0">
                <div className="col-sm-12 col-lg-6">
                  <div className="left">
                    <img src={lboard} alt="" className="lboard" />
                    <h2>
                      <span>Contact Us for</span> <br />
                      Business Enquires
                    </h2>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="right">
                    <i className="fa fa-caret-left" />

                    {/* Form Start Here */}
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="p-0 m-auto"
                    >
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input
                            name="user_name"
                            className="form-control"
                            placeholder="Full Name"
                            required
                            type="text"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            name="user_email"
                            className="form-control"
                            placeholder="Email"
                            required
                            type="email"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="Message"
                            required
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12">
                          <button
                            className="btn btn-warning btn-block mt-2"
                            type="submit"
                            value="Send"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact ends */}

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

export default Body;
