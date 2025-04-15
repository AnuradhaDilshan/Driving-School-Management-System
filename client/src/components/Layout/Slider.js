import React from "react";
// import { NavLink } from "react-router-dom";
import "../../.././src/App.css";

//FEATURE IMAGES
import First from "../../assets/feature/1.png";
import Second from "../../assets/feature/2.png";
import Third from "../../assets/feature/3.png";
import Fourth from "../../assets/feature/4.png";
import Fifth from "../../assets/feature/5.png";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={First} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Start Your Journey</h5>
              <p>
                Unlock the freedom of the open road with our comprehensive
                driving lessons.
                <br />
                We'll guide you every step of the way, from learner to licensed
                driver.
              </p>
              {/* <NavLink to="/register" className="btn btn-warning mt-3">
                Register Now
              </NavLink> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Second} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Confidence Behind the Wheel</h5>
              <p>
                Gain the skills and confidence you need to navigate any road
                safely.
                <br />
                Our instructors are dedicated to helping you become a skilled
                and responsible driver.
              </p>
              {/* <NavLink to="/register" className="btn btn-warning mt-3">
                Register Now
              </NavLink> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Third} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Your Road to Success Begins Here</h5>
              <p>
                Achieve your driving goals with our instructors and
                state-of-the-art vehicles.
                <br />
                We're committed to your success from your first lesson to your
                driver's test.
              </p>
              {/* <NavLink to="/register" className="btn btn-warning mt-3">
                Register Now
              </NavLink> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Fourth} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Join Our Community of Successful Drivers</h5>
              <p>
                When you choose our driving school, you're joining a community
                of skilled drivers.
                <br />
                We're here to support you long after you've passed your test.
              </p>
              {/* <NavLink to="/register" className="btn btn-warning mt-3">
                Register Now
              </NavLink> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Fifth} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Safety First, Always</h5>
              <p>
                Safety is our top priority. We'll teach you defensive driving
                techniques and prepare you for real-world challenges, ensuring
                you're a safe and responsible driver.
              </p>
              {/* <NavLink to="/register" className="btn btn-warning mt-3">
                Register Now
              </NavLink> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
