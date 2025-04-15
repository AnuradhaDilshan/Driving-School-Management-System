import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Courses = () => {
  const [users, setUsers] = useState([]);
  const [submitError, setSubmitError] = useState("");
  const [submitError1, setSubmitError1] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedTime1, setSelectedTime1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [selectedTime2, setSelectedTime2] = useState("");
  const [selectedDate3, setSelectedDate3] = useState("");
  const [selectedTime3, setSelectedTime3] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitSuccess1, setSubmitSuccess1] = useState("");
  const [submittedDate, setSubmittedDate] = useState("");
  const [submittedTime, setSubmittedTime] = useState("");
  const [submittedDate1, setSubmittedDate1] = useState("");
  const [submittedTime1, setSubmittedTime1] = useState("");
  const [submittedDate2, setSubmittedDate2] = useState("");
  const [submittedTime2, setSubmittedTime2] = useState("");
  const [submittedDate3, setSubmittedDate3] = useState("");
  const [submittedTime3, setSubmittedTime3] = useState("");
  const [vehicleCat, setvehicleCat] = useState([]);
  const [classStatus, setclassStatus] = useState([]);
  const [examStatus, setexamStatus] = useState([]);
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
      .get("/dashboard/admin/class-status")
      .then((classStatus) => setclassStatus(classStatus.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/exam-status")
      .then((examStatus) => setexamStatus(examStatus.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/course")
      .then((classData) => {
        if (
          classData.data.selectedDate &&
          classData.data.selectedTime &&
          classData.data.selectedDate1 &&
          classData.data.selectedTime1
        ) {
          // If available, set submitSuccess to true and populate submittedDate and submittedTime
          setSubmitSuccess(true);
          setSubmittedDate(classData.data.selectedDate);
          setSubmittedTime(classData.data.selectedTime);
          setSubmittedDate1(classData.data.selectedDate1);
          setSubmittedTime1(classData.data.selectedTime1);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/admin/course2")
      .then((classData1) => {
        if (
          classData1.data.selectedDate2 &&
          classData1.data.selectedTime2 &&
          classData1.data.selectedDate3 &&
          classData1.data.selectedTime3
        ) {
          // If available, set submitSuccess to true and populate submittedDate and submittedTime
          setSubmitSuccess1(true);
          setSubmittedDate2(classData1.data.selectedDate2);
          setSubmittedTime2(classData1.data.selectedTime2);
          setSubmittedDate3(classData1.data.selectedDate3);
          setSubmittedTime3(classData1.data.selectedTime3);
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
    setSubmitError("");
  };

  const handleTimeChange1 = (event) => {
    setSelectedTime1(event.target.value);
    setSubmitError("");
  };

  // Function to handle date selection
  const handleDateChange2 = (event) => {
    setSelectedDate2(event.target.value);
    setSubmitError1("");
  };

  const handleTimeChange2 = (event) => {
    setSelectedTime2(event.target.value);
    setSubmitError1("");
  };

  // Function to handle date selection
  const handleDateChange3 = (event) => {
    setSelectedDate3(event.target.value);
    setSubmitError1("");
  };

  const handleTimeChange3 = (event) => {
    setSelectedTime3(event.target.value);
    setSubmitError1("");
  };

  // Function to handle submission when the "Submit" button is clicked
  const handleSubmission = async (e) => {
    if (selectedDate && selectedTime && selectedDate1 && selectedTime1) {
      setSubmitError("");

      try {
        const selectedUsers = group1.slice(0, 5);
        const selectedNics = selectedUsers.map((user) => user.nic);
        const res = await axios.post("/api/v1/dates/course", {
          selectedDate,
          selectedTime,
          selectedDate1,
          selectedTime1,
          selectedUsers: selectedNics,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSubmittedDate(selectedDate);
          setSubmittedTime(selectedTime);
          setSubmittedDate1(selectedDate1);
          setSubmittedTime1(selectedTime1);
          setSelectedDate("");
          setSelectedTime("");
          setSelectedDate1("");
          setSelectedTime1("");
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
    if (selectedDate2 && selectedTime2 && selectedDate3 && selectedTime3) {
      setSubmitError1("");

      try {
        const selectedUsers1 = group2.slice(0, 5);
        const selectedNics1 = selectedUsers1.map((user) => user.nic);
        const res = await axios.post("/api/v1/dates/courseother", {
          selectedDate2,
          selectedTime2,
          selectedDate3,
          selectedTime3,
          selectedUsers1: selectedNics1,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSubmittedDate2(selectedDate2);
          setSubmittedTime2(selectedTime2);
          setSubmittedDate3(selectedDate3);
          setSubmittedTime3(selectedTime3);
          setSelectedDate2("");
          setSelectedTime2("");
          setSelectedDate3("");
          setSelectedTime3("");
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
    setSelectedDate1(""); // Reset the date input
    setSelectedTime1(""); // Reset the time input
    setSubmitError("");
  };

  // Function to clear the selected date and time
  const handleClearDate1 = () => {
    setSelectedDate2(""); // Reset the date input
    setSelectedTime2(""); // Reset the time input
    setSelectedDate3(""); // Reset the date input
    setSelectedTime3(""); // Reset the time input
    setSubmitError1("");
  };

  const getCategoryForUser = (nic) => {
    const userCategory = vehicleCat.find((category) => category.nic === nic);
    return userCategory ? userCategory.category : "N/A";
  };

  const getStatusForUser = (nic) => {
    const userStatus = classStatus.find((status) => status.nic === nic);
    return userStatus ? userStatus.status : "Offline";
  };

  const getStatusForExam = (nic) => {
    const userStatus1 = examStatus.find((status) => status.nic === nic);
    return userStatus1 ? userStatus1.status : "Offline";
  };

  // Filter out users with role = 1
  const filteredUsers = users.filter((user) => user.role !== 1);

  // Split the filtered users into two groups with a maximum of 5 members per group
  const group1 = filteredUsers.slice(0, 5);
  const group2 = filteredUsers.slice(5, 10);

  return (
    <Layout title={"Courses | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Times Slot - 1</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Phone</th>
                        <th>Vehicle Category</th>
                        <th>Class Status</th>
                        <th>Exam Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group1.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.nic}</td>
                          <td>{user.phone}</td>
                          <td>{getCategoryForUser(user.nic)}</td>
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
                          <td>
                            <button
                              id="stats"
                              className={
                                getStatusForExam(user.nic) === "Accept"
                                  ? "active1"
                                  : getStatusForExam(user.nic) === "Reject"
                                  ? "not-active1"
                                  : user.status === "Offline"
                                  ? "not-active2"
                                  : ""
                              }
                            >
                              {getStatusForExam(user.nic)}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="input-container5">
                    {submitSuccess ? (
                      <button className="active3">
                        Class Date : {submittedDate} | Time : {submittedTime}{" "}
                        <br />
                        Exam Date : {submittedDate1} | Time : {submittedTime1}
                      </button>
                    ) : (
                      <>
                        <p>Class : </p>
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
                        <br />
                        <p>Exam : </p>
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

            <h2>Times Slot - 2</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Phone</th>
                        <th>Vehicle Category</th>
                        <th>Class Status</th>
                        <th>Exam Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group2.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.nic}</td>
                          <td>{user.phone}</td>
                          <td>{getCategoryForUser(user.nic)}</td>
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
                          <td>
                            <button
                              id="stats"
                              className={
                                getStatusForExam(user.nic) === "Accept"
                                  ? "active1"
                                  : getStatusForExam(user.nic) === "Reject"
                                  ? "not-active1"
                                  : user.status === "Offline"
                                  ? "not-active2"
                                  : ""
                              }
                            >
                              {getStatusForExam(user.nic)}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="input-container5">
                    {submitSuccess1 ? (
                      <button className="active3">
                        Class Date : {submittedDate2} | Time : {submittedTime2}{" "}
                        <br />
                        Exam Date : {submittedDate3} | Time : {submittedTime3}
                      </button>
                    ) : (
                      <>
                        <p>Class : </p>
                        <input
                          type="date"
                          onChange={handleDateChange2}
                          value={selectedDate2}
                          className="date-input"
                          required="true"
                        />
                        <input
                          type="time"
                          onChange={handleTimeChange2}
                          value={selectedTime2}
                          className="time-input"
                          required="true"
                        />
                        <br />
                        <p>Exam : </p>
                        <input
                          type="date"
                          onChange={handleDateChange3}
                          value={selectedDate3}
                          className="date-input"
                          required="true"
                        />
                        <input
                          type="time"
                          onChange={handleTimeChange3}
                          value={selectedTime3}
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

export default Courses;
