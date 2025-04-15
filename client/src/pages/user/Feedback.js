import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/User.css";

const Feedback = () => {
  const [drivingSchoolRating, setDrivingSchoolRating] = useState(0);
  const [instructorRating, setInstructorRating] = useState(0);
  const [opinion, setOpinion] = useState("");
  const [auth] = useAuth();

  const handleOpinion = (e) => {
    setOpinion(e.target.value);
  };

  const handleFeedback = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/opinion/feedbacks", {
        nic: auth?.user?.nic,
        drivingSchoolRating,
        instructorRating,
        opinion,
      });

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        // Reset state values after successful submission
        setDrivingSchoolRating(0);
        setInstructorRating(0);
        setOpinion("");

        // Reset stars in the UI
        const allStarDrivingSchool = document.querySelectorAll(
          ".rating.driving-school .star"
        );
        const allStarInstructor = document.querySelectorAll(
          ".rating.instructor .star"
        );

        allStarDrivingSchool.forEach((item) => {
          item.classList.replace("bxs-star", "bx-star");
          item.classList.remove("active");
        });

        allStarInstructor.forEach((item) => {
          item.classList.replace("bxs-star", "bx-star");
          item.classList.remove("active");
        });

        document.querySelector('textarea[name="opinion"]').value = "";
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    const allStarDrivingSchool = document.querySelectorAll(
      ".rating.driving-school .star"
    );
    const ratingValueDrivingSchool = document.querySelector(
      ".rating.driving-school input"
    );

    allStarDrivingSchool.forEach((item, idx) => {
      item.addEventListener("click", function () {
        let click = 0;
        setDrivingSchoolRating(idx + 1);
        ratingValueDrivingSchool.value = idx + 1;

        allStarDrivingSchool.forEach((i) => {
          i.classList.replace("bxs-star", "bx-star");
          i.classList.remove("active");
        });
        for (let i = 0; i < allStarDrivingSchool.length; i++) {
          if (i <= idx) {
            allStarDrivingSchool[i].classList.replace("bx-star", "bxs-star");
            allStarDrivingSchool[i].classList.add("active");
          } else {
            allStarDrivingSchool[i].style.setProperty("--i", click);
            click++;
          }
        }
      });
    });

    const allStarInstructor = document.querySelectorAll(
      ".rating.instructor .star"
    );
    const ratingValueInstructor = document.querySelector(
      ".rating.instructor input"
    );

    allStarInstructor.forEach((item, idx) => {
      item.addEventListener("click", function () {
        let click = 0;
        setInstructorRating(idx + 1);
        ratingValueInstructor.value = idx + 1;

        allStarInstructor.forEach((i) => {
          i.classList.replace("bxs-star", "bx-star");
          i.classList.remove("active");
        });
        for (let i = 0; i < allStarInstructor.length; i++) {
          if (i <= idx) {
            allStarInstructor[i].classList.replace("bx-star", "bxs-star");
            allStarInstructor[i].classList.add("active");
          } else {
            allStarInstructor[i].style.setProperty("--i", click);
            click++;
          }
        }
      });
    });
  }, []); // Empty dependency array for componentDidMount equivalent

  return (
    <Layout title={"Feedback | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>Feedback</h2>
            <br />
            <div className="process-wrapper">
              <div id="classCard">
                <div id="progress-content-section-train">
                  <div className="sessionResultCardWrapper">
                    <html lang="en">
                      <head>
                        <link
                          rel="stylesheet"
                          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
                        />
                      </head>
                      <body className="fedBody">
                        <div className="wrapperNEW">
                          <form action="#">
                            <div className="rating-container">
                              <h3>Rate our Driving School</h3>
                              <div className="rating driving-school">
                                <input type="number" name="rating" hidden />
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 0 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 1 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 2 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 3 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 4 }}
                                ></i>
                              </div>
                              <h3>Rate our Instructor</h3>
                              <div className="rating instructor">
                                <input type="number" name="rating" hidden />
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 0 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 1 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 2 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 3 }}
                                ></i>
                                <i
                                  className="bx bx-star star"
                                  style={{ "--i": 4 }}
                                ></i>
                              </div>
                            </div>
                            <textarea
                              name="opinion"
                              cols="30"
                              rows="5"
                              type="text"
                              placeholder="Your opinion..."
                              onChange={handleOpinion}
                            ></textarea>
                            <br />
                            <br />
                            <div className="btn-group">
                              <button
                                type="submit"
                                onClick={handleFeedback}
                                className="btn submit"
                              >
                                Submit
                              </button>
                              <button className="btn cancel">Cancel</button>
                            </div>
                          </form>
                        </div>
                      </body>
                    </html>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
