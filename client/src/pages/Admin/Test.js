import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [submitError, setSubmitError] = useState("");
  const [submitError1, setSubmitError1] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedTime1, setSelectedTime1] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submittedDate, setSubmittedDate] = useState("");
  const [submittedTime, setSubmittedTime] = useState("");
  const [submitSuccess1, setSubmitSuccess1] = useState("");
  const [submittedDate1, setSubmittedDate1] = useState("");
  const [submittedTime1, setSubmittedTime1] = useState("");
  const [vehicleCat, setvehicleCat] = useState([]);
  const [testStatus, settestStatus] = useState([]);
  const defaultStatus = "Offline";

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((response) => {
        const userData = response.data.map((user) => {
          if (user.status) {
            return user; // Use the status from the database if available
          } else {
            return { ...user, status: defaultStatus }; // Use the default status if not available
          }
        });
        setUsers(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/vehicle-category")
      .then((vehicleCat) => setvehicleCat(vehicleCat.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/test-status")
      .then((testStatus) => settestStatus(testStatus.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/test")
      .then((testData) => {
        // Check if selectedDate and selectedTime are available in the response
        if (testData.data.selectedDate && testData.data.selectedTime) {
          // If available, set submitSuccess to true and populate submittedDate and submittedTime
          setSubmitSuccess(true);
          setSubmittedDate(testData.data.selectedDate);
          setSubmittedTime(testData.data.selectedTime);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/test2")
      .then((testData1) => {
        if (testData1.data.selectedDate1 && testData1.data.selectedTime1) {
          // If available, set submitSuccess to true and populate submittedDate and submittedTime
          setSubmitSuccess1(true);
          setSubmittedDate1(testData1.data.selectedDate1);
          setSubmittedTime1(testData1.data.selectedTime1);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSubmitError("");
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setSubmitError("");
  };

  // Function to handle date selection
  const handleDateChange1 = (event) => {
    setSelectedDate1(event.target.value);
    setSubmitError1("");
  };

  const handleTimeChange1 = (event) => {
    setSelectedTime1(event.target.value);
    setSubmitError1("");
  };

  // Function to handle submission when the "Submit" button is clicked
  const handleSubmission = async (e) => {
    if (selectedDate && selectedTime) {
      setSubmitError("");

      try {
        const selectedUsers = group1.slice(0, 5);
        const selectedNics = selectedUsers.map((user) => user.nic);
        const res = await axios.post("/api/v1/dates/drivingtest", {
          selectedDate,
          selectedTime,
          selectedUsers: selectedNics,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSubmittedDate(selectedDate);
          setSubmittedTime(selectedTime);
          setSelectedDate("");
          setSelectedTime("");
          setSubmitSuccess(true);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      setSubmitError("Please fill both Date and Time before Submitting.");
    }
  };

  // Function to handle submission when the "Submit" button is clicked
  const handleSubmission1 = async (e) => {
    if (selectedDate1 && selectedTime1) {
      setSubmitError1("");

      try {
        const selectedUsers1 = group2.slice(0, 5);
        const selectedNics1 = selectedUsers1.map((user) => user.nic);
        const res = await axios.post("/api/v1/dates/drivingtestother", {
          selectedDate1,
          selectedTime1,
          selectedUsers1: selectedNics1,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSubmittedDate1(selectedDate1);
          setSubmittedTime1(selectedTime1);
          setSelectedDate1("");
          setSelectedTime1("");
          setSubmitSuccess1(true);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      setSubmitError1("Please fill both Date and Time before Submitting.");
    }
  };

  // Function to clear the selected date and time
  const handleClearDate = () => {
    setSelectedDate(""); // Reset the date input
    setSelectedTime(""); // Reset the time input
    setSubmitError("");
    setSubmitSuccess(false);
  };

  // Function to clear the selected date and time
  const handleClearDate1 = () => {
    setSelectedDate1(""); // Reset the date input
    setSelectedTime1(""); // Reset the time input
    setSubmitError1("");
    setSubmitSuccess1(false);
  };

  const getCategoryForUser = (nic) => {
    const userCategory = vehicleCat.find((category) => category.nic === nic);
    return userCategory ? userCategory.category : "N/A";
  };

  const getStatusForUser = (nic) => {
    const userStatus = testStatus.find((status) => status.nic === nic);
    return userStatus ? userStatus.status : "Offline";
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
    return letters.length > 0 ? letters.join(", ") : "N/A";
  };

  // Filter out users with role = 1
  const filteredUsers = users.filter((user) => user.role !== 1);

  // Split the filtered users into two groups with a maximum of 5 members per group
  const group1 = filteredUsers.slice(0, 5);
  const group2 = filteredUsers.slice(5, 10);

  return (
    <Layout title={"Driving Test | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Driving Test Slot - 1</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Vehicle Category</th>
                        <th>Vehicle Types</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group1.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.nic}</td>
                          <td>{getCategoryForUser(user.nic)}</td>
                          <td>{getVehicleForUser(user.nic)}</td>
                          <td>
                            <button
                              id="stats"
                              className={
                                getStatusForUser(user.nic) === "Accept"
                                  ? "active1"
                                  : getStatusForUser(user.nic) === "Reject"
                                  ? "not-active1"
                                  : user.status === "Offline"
                                  ? "not-active2"
                                  : ""
                              }
                            >
                              {getStatusForUser(user.nic)}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="input-container1">
                    {submitSuccess ? (
                      <button className="active2">
                        Successfully Submitted | Date : {submittedDate} | Time :{" "}
                        {submittedTime}
                      </button>
                    ) : (
                      // Render inputs and buttons
                      <>
                        <input
                          type="date"
                          onChange={handleDateChange}
                          value={selectedDate}
                          className="date-input"
                          required="true"
                        />
                        <input
                          type="time"
                          onChange={handleTimeChange}
                          value={selectedTime}
                          className="time-input"
                          required="true"
                        />
                        <button
                          onClick={() => handleSubmission()}
                          className="submit-button"
                        >
                          Submit
                        </button>
                        <button
                          onClick={handleClearDate}
                          className="clear-button"
                        >
                          Clear
                        </button>
                      </>
                    )}
                  </div>
                  {submitError && (
                    <p className="error-message" style={errorStyles}>
                      {submitError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <h2>Driving Test Slot - 2</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Vehicle Category</th>
                        <th>Vehicle Types</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group2.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.nic}</td>
                          <td>{getCategoryForUser(user.nic)}</td>
                          <td>{getVehicleForUser(user.nic)}</td>
                          <td>
                            <button
                              id="stats"
                              className={
                                getStatusForUser(user.nic) === "Accept"
                                  ? "active1"
                                  : getStatusForUser(user.nic) === "Reject"
                                  ? "not-active1"
                                  : user.status === "Offline"
                                  ? "not-active2"
                                  : ""
                              }
                            >
                              {getStatusForUser(user.nic)}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="input-container1">
                    {submitSuccess1 ? (
                      <button className="active2">
                        Successfully Submitted | Date : {submittedDate1} | Time
                        : {submittedTime1}
                      </button>
                    ) : (
                      // Render inputs and buttons
                      <>
                        <input
                          type="date"
                          onChange={handleDateChange1}
                          value={selectedDate1}
                          className="date-input"
                          required="true"
                        />
                        <input
                          type="time"
                          onChange={handleTimeChange1}
                          value={selectedTime1}
                          className="time-input"
                          required="true"
                        />
                        <button
                          onClick={() => handleSubmission1()}
                          className="submit-button"
                        >
                          Submit
                        </button>
                        <button
                          onClick={handleClearDate1}
                          className="clear-button"
                        >
                          Clear
                        </button>
                      </>
                    )}
                  </div>
                  {submitError1 && (
                    <p className="error-message" style={errorStyles}>
                      {submitError1}
                    </p>
                  )}
                </div>
              </div>
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

export default Test;
