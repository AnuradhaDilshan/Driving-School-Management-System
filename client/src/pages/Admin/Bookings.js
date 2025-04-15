import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Bookings = () => {
  const [users, setUsers] = useState([]);
  const [vehicleCat, setvehicleCat] = useState([]);
  const [training1, setTraining1] = useState([]);
  const [training2, setTraining2] = useState([]);
  const [training3, setTraining3] = useState([]);
  const [training4, setTraining4] = useState([]);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/vehicle-category")
      .then((vehicleCat) => setvehicleCat(vehicleCat.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((user) => {
    const hasMatchingNicInVehicleCat = vehicleCat.some(
      (category) => category.nic === user.nic
    );
    const hasMatchingNicInTraining1 = training1.some(
      (trainer1) => trainer1.nic === user.nic
    );

    return (
      user.role !== 1 && hasMatchingNicInVehicleCat && hasMatchingNicInTraining1
    );
  });

  const getCategoryForUser = (nic) => {
    const userCategory = vehicleCat.find((category) => category.nic === nic);
    return userCategory ? userCategory.category : "Not Set";
  };

  const getVehicleForUser = (nic) => {
    const userVehicleCat = vehicleCat.find((category) => category.nic === nic);
    const selectedOptions = userVehicleCat
      ? userVehicleCat.selectedOptions
      : [];

    // Mapping of specific categories to letters
    const categoryMappings = {
      "A - Motorcycle Engine Capacity > 100cc": "A",
      "B1 - Motor Tricycle - Tare <= 500kg, GVW >= 1000kg": "B1",
      "B - All Cars/Dual Purpose - GVW <= 3500kg, Passengers <= 8, Trailer <= 250kg":
        "B",
      "C1 - Light Motor Lorry - 3500kg < GVW <= 17000kg, Trailer < 750kg": "C1",
      "C - Motor Lorry - GVW > 17000kg, Trailer <= 750kg": "C",
      "D1 - Light Motor Coach - Passengers < 32, Trailer <= 750kg": "D1",
      "D - Motor Coach - Passengers > 32, Trailer <= 750kg": "D",
    };

    // Map each selected option to its corresponding letter
    const letters = selectedOptions.map((option) => categoryMappings[option]);

    // Join the letters with commas
    return letters.length > 0 ? letters.join(", ") : "Not Set";
  };

  useEffect(() => {
    axios
      .get("/dashboard/user/trainer1")
      .then((trainer1) => setTraining1(trainer1.data))
      .catch((err) => console.log(err));
  }, []);

  const getTrainingInfoForUser1 = (nic, trainingSessions1) => {
    const userTraining1 = trainingSessions1.find(
      (trainer1) => trainer1.nic === nic
    );

    return userTraining1
      ? { selectedDate: userTraining1.selectedDate, time: userTraining1.time }
      : { selectedDate: "Not Set", time: "Not Set" };
  };

  useEffect(() => {
    axios
      .get("/dashboard/user/trainer2")
      .then((trainer2) => setTraining2(trainer2.data))
      .catch((err) => console.log(err));
  }, []);

  const getTrainingInfoForUser2 = (nic, trainingSessions2) => {
    const userTraining2 = trainingSessions2.find(
      (trainer2) => trainer2.nic === nic
    );

    return userTraining2
      ? { selectedDate1: userTraining2.selectedDate1, time: userTraining2.time }
      : { selectedDate1: "Not Set", time: "Not Set" };
  };

  useEffect(() => {
    axios
      .get("/dashboard/user/trainer3")
      .then((trainer3) => setTraining3(trainer3.data))
      .catch((err) => console.log(err));
  }, []);

  const getTrainingInfoForUser3 = (nic, trainingSessions3) => {
    const userTraining3 = trainingSessions3.find(
      (trainer3) => trainer3.nic === nic
    );

    return userTraining3
      ? { selectedDate2: userTraining3.selectedDate2, time: userTraining3.time }
      : { selectedDate2: "Not Set", time: "Not Set" };
  };

  useEffect(() => {
    axios
      .get("/dashboard/user/trainer4")
      .then((trainer4) => setTraining4(trainer4.data))
      .catch((err) => console.log(err));
  }, []);

  const getTrainingInfoForUser4 = (nic, trainingSessions4) => {
    const userTraining4 = trainingSessions4.find(
      (trainer4) => trainer4.nic === nic
    );

    return userTraining4
      ? { selectedDate3: userTraining4.selectedDate3, time: userTraining4.time }
      : { selectedDate3: "Not Set", time: "Not Set" };
  };

  return (
    <Layout title={"Training Bookings | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Reservations List</h2>
            <div className="process-wrapper">
              {filteredUsers.map((user, index) => (
                <div key={index} id="timeCard1">
                  <div className="sessionResultCardWrapper1">
                    <div className="revDetails">
                      <p>Name: {user.name}</p>
                      <p>NIC: {user.nic}</p>
                      <p>Vehicle Types: {getVehicleForUser(user.nic)}</p>
                      <p>
                        Instructor:{" "}
                        {getCategoryForUser(user.nic) ===
                          "Light-Weight Vehicle" && user.gender !== "Female"
                          ? "Mr. Kithsiri Kumara"
                          : getCategoryForUser(user.nic) ===
                            "Heavy-Weight Vehicle"
                          ? "Mr. Anuradha Dilshan"
                          : getCategoryForUser(user.nic) ===
                              "Light-Weight Vehicle" && user.gender === "Female"
                          ? "Ms. Neelya Samarasinghe"
                          : ""}
                      </p>
                    </div>
                    <div className="revDetails1">
                      <p>
                        Session 01 :{" "}
                        <span
                          className="DetailDisplay"
                          style={{ backgroundColor: "#f1c807" }}
                        >
                          {
                            getTrainingInfoForUser1(user.nic, training1)
                              .selectedDate
                          }
                        </span>{" "}
                        <span
                          className="DetailDisplay1"
                          style={{ backgroundColor: "#ffe00f" }}
                        >
                          {getTrainingInfoForUser1(user.nic, training1).time}
                        </span>
                      </p>
                      <p>
                        Session 02 :{" "}
                        <span
                          className="DetailDisplay"
                          style={{ backgroundColor: "#f1c807" }}
                        >
                          {
                            getTrainingInfoForUser2(user.nic, training2)
                              .selectedDate1
                          }
                        </span>{" "}
                        <span
                          className="DetailDisplay1"
                          style={{ backgroundColor: "#ffe00f" }}
                        >
                          {getTrainingInfoForUser2(user.nic, training2).time}
                        </span>
                      </p>
                      <p>
                        Session 03 :{" "}
                        <span
                          className="DetailDisplay"
                          style={{ backgroundColor: "#f1c807" }}
                        >
                          {
                            getTrainingInfoForUser3(user.nic, training3)
                              .selectedDate2
                          }
                        </span>{" "}
                        <span
                          className="DetailDisplay1"
                          style={{ backgroundColor: "#ffe00f" }}
                        >
                          {getTrainingInfoForUser3(user.nic, training3).time}
                        </span>
                      </p>
                      <p>
                        Session 04 :{" "}
                        <span
                          className="DetailDisplay"
                          style={{ backgroundColor: "#f1c807" }}
                        >
                          {
                            getTrainingInfoForUser4(user.nic, training4)
                              .selectedDate3
                          }
                        </span>{" "}
                        <span
                          className="DetailDisplay1"
                          style={{ backgroundColor: "#ffe00f" }}
                        >
                          {getTrainingInfoForUser4(user.nic, training4).time}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const errorStyles = {
  color: "red",
  fontSize: "11px",
};

export default Bookings;
