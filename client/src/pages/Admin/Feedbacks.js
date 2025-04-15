import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import star from "../../assets/star.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Feedbacks = () => {
  const [users, setUsers] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/feedbacks")
      .then((feedback) => setFeedback(feedback.data))
      .catch((err) => console.log(err));
  }, []);

  const getSchoolRating = (nic) => {
    const userSchoolRating = feedback.find(
      (drivingSchoolRating) => drivingSchoolRating.nic === nic
    );
    return userSchoolRating ? userSchoolRating.drivingSchoolRating : "N/A";
  };

  const getInstructorRating = (nic) => {
    const userInstructorRating = feedback.find(
      (instructorRating) => instructorRating.nic === nic
    );
    return userInstructorRating ? userInstructorRating.instructorRating : "N/A";
  };

  const getOpinion = (nic) => {
    const userOpinion = feedback.find((opinion) => opinion.nic === nic);
    return userOpinion ? userOpinion.opinion : "N/A";
  };

  const filteredUsers = users.filter((user) => {
    return feedback.some(
      (item) => item.nic === user.nic && item.drivingSchoolRating
    );
  });

  const renderStars = (rating) => {
    const stars = [];
    const starSize = 17;
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          key={i}
          src={star}
          alt="Star"
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
        />
      );
    }
    return stars;
  };

  return (
    <Layout title={"Feedbacks | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Feedbacks</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>School Rating</th>
                        <th>Instructor Rating</th>
                        <th>Opinion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{renderStars(getSchoolRating(user.nic))}</td>
                          <td>{renderStars(getInstructorRating(user.nic))}</td>
                          <td style={{ whiteSpace: "pre-wrap" }}>
                            {getOpinion(user.nic) || "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedbacks;
