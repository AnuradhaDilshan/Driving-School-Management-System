import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/User.css";

const TrainSessions = () => {
  const [auth] = useAuth();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [selectedDate3, setSelectedDate3] = useState("");
  const [dateError, setDateError] = useState("");
  const [dateError1, setDateError1] = useState("");
  const [dateError2, setDateError2] = useState("");
  const [dateError3, setDateError3] = useState("");
  const [submittedDate, setSubmittedDate] = useState("");
  const [submittedDate1, setSubmittedDate1] = useState("");
  const [submittedDate2, setSubmittedDate2] = useState("");
  const [submittedDate3, setSubmittedDate3] = useState("");
  const [submittedTime, setSubmittedTime] = useState("");
  const [submittedTime1, setSubmittedTime1] = useState("");
  const [submittedTime2, setSubmittedTime2] = useState("");
  const [submittedTime3, setSubmittedTime3] = useState("");
  const [isAnySessionReserved, setIsAnySessionReserved] = useState(false);
  const [isAnySessionReserved1, setIsAnySessionReserved1] = useState(false);
  const [isAnySessionReserved2, setIsAnySessionReserved2] = useState(false);
  const [isAnySessionReserved3, setIsAnySessionReserved3] = useState(false);

  const initialSessions = [
    {
      id: 1,
      time: "8:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 2,
      time: "10:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 3,
      time: "12:30 PM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 4,
      time: "2:30 PM",
      status: "Available",
      activeBookings: 0,
    },
  ];

  const [sessions, setSessions] = useState(initialSessions);

  const handleButtonClick = (clickedSession, submittedTime) => {
    if (selectedDate.trim() === "") {
      // Show error message if date is not selected
      setDateError("* Please select a date to make a reservation.");
      return;
    }

    setSessions((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === clickedSession.id) {
          if (session.status === "Available" && selectedDate.trim() !== "") {
            const nic = auth?.user?.nic;
            const time = clickedSession.time;
            handleSubmit(nic, selectedDate, time);
          }

          const newStatus =
            session.status === "Available" && selectedDate.trim() !== ""
              ? "Reserved"
              : "Available";
          const isSubmittedTime =
            submittedTime && submittedTime === clickedSession.time;

          return {
            ...session,
            status: newStatus,
            activeBookings: isSubmittedTime ? 1 : 1,
          };
        } else if (session.status === "Reserved") {
          return {
            ...session,
            status: "Available",
            activeBookings: 0,
          };
        }
        return session;
      })
    );
    // Clear the error message when a date is selected
    setDateError("");
  };

  const handleSubmit = async (nic, selectedDate, time) => {
    try {
      const res = await axios.post("/api/v1/training/trainingslot1", {
        nic,
        selectedDate,
        time,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setSubmittedDate(selectedDate);
        setIsAnySessionReserved(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const secondSessions = [
    {
      id: 1,
      time: "8:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 2,
      time: "10:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 3,
      time: "12:30 PM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 4,
      time: "2:30 PM",
      status: "Available",
      activeBookings: 0,
    },
  ];

  const [sessions1, setSessions1] = useState(secondSessions);

  const handleButtonClick1 = (clickedSession, submittedTime1) => {
    if (selectedDate1.trim() === "") {
      // Show error message if date is not selected
      setDateError1("* Please select a date to make a reservation.");
      return;
    }
    setSessions1((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === clickedSession.id) {
          if (session.status === "Available" && selectedDate1.trim() !== "") {
            const nic = auth?.user?.nic;
            const time = clickedSession.time;
            handleSubmit1(nic, selectedDate1, time);
          }
          const newStatus =
            session.status === "Available" && selectedDate1.trim() !== ""
              ? "Reserved"
              : "Available";
          const isSubmittedTime1 =
            submittedTime1 && submittedTime1 === clickedSession.time;

          return {
            ...session,
            status: newStatus,
            activeBookings: isSubmittedTime1 ? 1 : 1,
          };
        } else if (session.status === "Reserved") {
          return {
            ...session,
            status: "Available",
            activeBookings: 0,
          };
        }
        return session;
      })
    );
    // Clear the error message when a date is selected
    setDateError1("");
  };

  const handleSubmit1 = async (nic, selectedDate1, time) => {
    try {
      const res = await axios.post("/api/v1/training/trainingslot2", {
        nic,
        selectedDate1,
        time,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setSubmittedDate1(selectedDate1);
        setIsAnySessionReserved1(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const thirdSessions = [
    {
      id: 1,
      time: "8:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 2,
      time: "10:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 3,
      time: "12:30 PM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 4,
      time: "2:30 PM",
      status: "Available",
      activeBookings: 0,
    },
  ];

  const [sessions2, setSessions2] = useState(thirdSessions);

  const handleButtonClick2 = (clickedSession, submittedTime2) => {
    if (selectedDate2.trim() === "") {
      // Show error message if date is not selected
      setDateError2("* Please select a date to make a reservation.");
      return;
    }
    setSessions2((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === clickedSession.id) {
          if (session.status === "Available" && selectedDate2.trim() !== "") {
            const nic = auth?.user?.nic;
            const time = clickedSession.time;
            handleSubmit2(nic, selectedDate2, time);
          }

          const newStatus =
            session.status === "Available" && selectedDate2.trim() !== ""
              ? "Reserved"
              : "Available";
          const isSubmittedTime2 =
            submittedTime2 && submittedTime2 === clickedSession.time;

          return {
            ...session,
            status: newStatus,
            activeBookings: isSubmittedTime2 ? 1 : 1,
          };
        } else if (session.status === "Reserved") {
          return {
            ...session,
            status: "Available",
            activeBookings: 0,
          };
        }
        return session;
      })
    );
    // Clear the error message when a date is selected
    setDateError2("");
  };

  const handleSubmit2 = async (nic, selectedDate2, time) => {
    try {
      const res = await axios.post("/api/v1/training/trainingslot3", {
        nic,
        selectedDate2,
        time,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setSubmittedDate2(selectedDate2);
        setIsAnySessionReserved2(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const fourthSessions = [
    {
      id: 1,
      time: "8:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 2,
      time: "10:30 AM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 3,
      time: "12:30 PM",
      status: "Available",
      activeBookings: 0,
    },
    {
      id: 4,
      time: "2:30 PM",
      status: "Available",
      activeBookings: 0,
    },
  ];

  const [sessions3, setSessions3] = useState(fourthSessions);

  const handleButtonClick3 = (clickedSession, submittedTime3) => {
    if (selectedDate3.trim() === "") {
      // Show error message if date is not selected
      setDateError3("* Please select a date to make a reservation.");
      return;
    }
    setSessions3((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === clickedSession.id) {
          if (session.status === "Available" && selectedDate3.trim() !== "") {
            const nic = auth?.user?.nic;
            const time = clickedSession.time;
            handleSubmit3(nic, selectedDate3, time);
          }

          const newStatus =
            session.status === "Available" && selectedDate3.trim() !== ""
              ? "Reserved"
              : "Available";
          const isSubmittedTime3 =
            submittedTime3 && submittedTime3 === clickedSession.time;

          return {
            ...session,
            status: newStatus,
            activeBookings: isSubmittedTime3 ? 1 : 1,
          };
        } else if (session.status === "Reserved") {
          return {
            ...session,
            status: "Available",
            activeBookings: 0,
          };
        }
        return session;
      })
    );
    // Clear the error message when a date is selected
    setDateError3("");
  };

  const handleSubmit3 = async (nic, selectedDate3, time) => {
    try {
      const res = await axios.post("/api/v1/training/trainingslot4", {
        nic,
        selectedDate3,
        time,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setSubmittedDate3(selectedDate3);
        setIsAnySessionReserved3(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Function to handle date selection on slot 01
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setDateError("");
  };

  // Function to handle date selection on slot 02
  const handleDateChange1 = (event) => {
    setSelectedDate1(event.target.value);
    setDateError1("");
  };

  // Function to handle date selection on slot 02
  const handleDateChange2 = (event) => {
    setSelectedDate2(event.target.value);
    setDateError2("");
  };

  // Function to handle date selection on slot 02
  const handleDateChange3 = (event) => {
    setSelectedDate3(event.target.value);
    setDateError3("");
  };

  useEffect(() => {
    const userNIC = auth?.user?.nic;
    axios
      .get(`/dashboard/user/training-session1?nic=${userNIC}`)
      .then((trainingSelection1) => {
        const receivedNIC = trainingSelection1.data.nic;
        const { selectedDate, time } = trainingSelection1.data;
        if (receivedNIC === userNIC && selectedDate && time) {
          setSelectedDate(selectedDate);
          setSubmittedDate(selectedDate);
          setSubmittedTime(time);
          setSessions((prevSessions) =>
            prevSessions.map((session) => ({
              ...session,
              status: session.time === time ? "Reserved" : session.status,
              activeBookings:
                session.time === time ? 1 : session.activeBookings,
            }))
          );
          setIsAnySessionReserved(true);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  useEffect(() => {
    const userNIC1 = auth?.user?.nic;
    axios
      .get(`/dashboard/user/training-session2?nic=${userNIC1}`)
      .then((trainingSelection2) => {
        const receivedNIC1 = trainingSelection2.data.nic;
        const { selectedDate1, time } = trainingSelection2.data;
        if (receivedNIC1 === userNIC1 && selectedDate1 && time) {
          setSelectedDate1(selectedDate1);
          setSubmittedDate1(selectedDate1);
          setSubmittedTime1(time);
          setSessions1((prevSessions) =>
            prevSessions.map((session) => ({
              ...session,
              status: session.time === time ? "Reserved" : session.status,
              activeBookings:
                session.time === time ? 1 : session.activeBookings,
            }))
          );
          setIsAnySessionReserved1(true);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  useEffect(() => {
    const userNIC2 = auth?.user?.nic;
    axios
      .get(`/dashboard/user/training-session3?nic=${userNIC2}`)
      .then((trainingSelection3) => {
        const receivedNIC2 = trainingSelection3.data.nic;
        const { selectedDate2, time } = trainingSelection3.data;
        if (receivedNIC2 === userNIC2 && selectedDate2 && time) {
          setSelectedDate2(selectedDate2);
          setSubmittedDate2(selectedDate2);
          setSubmittedTime2(time);
          setSessions2((prevSessions) =>
            prevSessions.map((session) => ({
              ...session,
              status: session.time === time ? "Reserved" : session.status,
              activeBookings:
                session.time === time ? 1 : session.activeBookings,
            }))
          );
          setIsAnySessionReserved2(true);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  useEffect(() => {
    const userNIC3 = auth?.user?.nic;
    axios
      .get(`/dashboard/user/training-session4?nic=${userNIC3}`)
      .then((trainingSelection4) => {
        const receivedNIC3 = trainingSelection4.data.nic;
        const { selectedDate3, time } = trainingSelection4.data;
        if (receivedNIC3 === userNIC3 && selectedDate3 && time) {
          setSelectedDate3(selectedDate3);
          setSubmittedDate3(selectedDate3);
          setSubmittedTime3(time);
          setSessions3((prevSessions) =>
            prevSessions.map((session) => ({
              ...session,
              status: session.time === time ? "Reserved" : session.status,
              activeBookings:
                session.time === time ? 1 : session.activeBookings,
            }))
          );
          setIsAnySessionReserved3(true);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  return (
    <Layout title={"Training Sessions | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>Book Time Slot</h2>
            <br />
            <div className="process-wrapper">
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="sessionDetailsHeadnew">
                    <div>
                      <p className="sessionDate1">Instructions</p>
                    </div>
                  </div>
                  <div className="instruct">
                    <p>
                      * You have 4 Training Sessions within the next 3 months.
                      <br />
                      * To reserve your preferred date and time, simply click on
                      the Available button.
                      <br />* Each session has a capacity of up to 5 active
                      bookings.
                    </p>
                  </div>
                </div>
              </div>
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="sessionDetailsHead">
                    <div>
                      <p className="sessionDateshow2">
                        <span
                          className="DateDisplay"
                          style={{ backgroundColor: "#ffffff" }}
                        >
                          | Training Session 01 |
                        </span>
                      </p>
                      <p className="sessionDateshow">Date : </p>
                      {submittedDate ? (
                        <p className="sessionDateshow1">
                          <span
                            className="DateDisplay"
                            style={{ backgroundColor: "#f1c807" }}
                          >
                            {selectedDate}
                          </span>
                        </p>
                      ) : (
                        <input
                          type="date"
                          onChange={handleDateChange}
                          value={selectedDate}
                          className="date-input"
                          required="true"
                        />
                      )}
                      {dateError && (
                        <p className="error-message1" style={{ color: "red" }}>
                          {dateError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="rowSet">
                    {sessions.map((session) => (
                      <div
                        key={session.id}
                        className={
                          session.status === "Reserved"
                            ? "ntmiSessionItemWrapperReserved"
                            : "ntmiSessionItemWrapper"
                        }
                      >
                        <p className="ntmiActiveSessionDetails">
                          Time:<span>{session.time}</span>
                        </p>
                        <div>
                          <p className="ntmiActiveSessionDetails">
                            Active Bookings:
                            <span>{session.activeBookings}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className={`btn btn-primary buttonAvil ${
                            session.status === "Reserved" ? "btn-reserved" : ""
                          }`}
                          onClick={() => handleButtonClick(session)}
                          disabled={
                            isAnySessionReserved ||
                            session.status === "Reserved"
                          }
                        >
                          {session.status}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="sessionDetailsHead">
                    <div>
                      <p className="sessionDateshow2">
                        <span
                          className="DateDisplay"
                          style={{ backgroundColor: "#ffffff" }}
                        >
                          | Training Session 02 |
                        </span>
                      </p>
                      <p className="sessionDateshow">Date : </p>
                      {submittedDate1 ? (
                        <p className="sessionDateshow1">
                          <span
                            className="DateDisplay"
                            style={{ backgroundColor: "#f1c807" }}
                          >
                            {selectedDate1}
                          </span>
                        </p>
                      ) : (
                        <input
                          type="date"
                          onChange={handleDateChange1}
                          value={selectedDate1}
                          className="date-input"
                          required="true"
                        />
                      )}
                      {dateError1 && (
                        <p className="error-message1" style={{ color: "red" }}>
                          {dateError1}
                        </p>
                      )}
                      {/* <p className="sessionDate">Saturday, 7th Oct 2023</p> */}
                    </div>
                  </div>
                  <div className="rowSet">
                    {sessions1.map((session) => (
                      <div
                        key={session.id}
                        className={
                          session.status === "Reserved"
                            ? "ntmiSessionItemWrapperReserved"
                            : "ntmiSessionItemWrapper"
                        }
                      >
                        <p className="ntmiActiveSessionDetails">
                          Time:<span>{session.time}</span>
                        </p>
                        <div>
                          <p className="ntmiActiveSessionDetails">
                            Active Bookings:
                            <span>{session.activeBookings}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className={`btn btn-primary buttonAvil ${
                            session.status === "Reserved" ? "btn-reserved" : ""
                          }`}
                          onClick={() => handleButtonClick1(session)}
                          disabled={
                            isAnySessionReserved1 ||
                            session.status === "Reserved"
                          }
                        >
                          {session.status}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="sessionDetailsHead">
                    <div>
                      <p className="sessionDateshow2">
                        <span
                          className="DateDisplay"
                          style={{ backgroundColor: "#ffffff" }}
                        >
                          | Training Session 03 |
                        </span>
                      </p>
                      <p className="sessionDateshow">Date : </p>
                      {submittedDate2 ? (
                        <p className="sessionDateshow1">
                          <span
                            className="DateDisplay"
                            style={{ backgroundColor: "#f1c807" }}
                          >
                            {selectedDate2}
                          </span>
                        </p>
                      ) : (
                        <input
                          type="date"
                          onChange={handleDateChange2}
                          value={selectedDate2}
                          className="date-input"
                          required="true"
                        />
                      )}
                      {dateError2 && (
                        <p className="error-message1" style={{ color: "red" }}>
                          {dateError2}
                        </p>
                      )}
                      {/* <p className="sessionDate">Saturday, 7th Oct 2023</p> */}
                    </div>
                  </div>
                  <div className="rowSet">
                    {sessions2.map((session) => (
                      <div
                        key={session.id}
                        className={
                          session.status === "Reserved"
                            ? "ntmiSessionItemWrapperReserved"
                            : "ntmiSessionItemWrapper"
                        }
                      >
                        <p className="ntmiActiveSessionDetails">
                          Time:<span>{session.time}</span>
                        </p>
                        <div>
                          <p className="ntmiActiveSessionDetails">
                            Active Bookings:
                            <span>{session.activeBookings}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className={`btn btn-primary buttonAvil ${
                            session.status === "Reserved" ? "btn-reserved" : ""
                          }`}
                          onClick={() => handleButtonClick2(session)}
                          disabled={
                            isAnySessionReserved2 ||
                            session.status === "Reserved"
                          }
                        >
                          {session.status}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="sessionDetailsHead">
                    <div>
                      <p className="sessionDateshow2">
                        <span
                          className="DateDisplay"
                          style={{ backgroundColor: "#ffffff" }}
                        >
                          | Training Session 04 |
                        </span>
                      </p>
                      <p className="sessionDateshow">Date : </p>
                      {submittedDate3 ? (
                        <p className="sessionDateshow1">
                          <span
                            className="DateDisplay"
                            style={{ backgroundColor: "#f1c807" }}
                          >
                            {selectedDate3}
                          </span>
                        </p>
                      ) : (
                        <input
                          type="date"
                          onChange={handleDateChange3}
                          value={selectedDate3}
                          className="date-input"
                          required="true"
                        />
                      )}
                      {dateError3 && (
                        <p className="error-message1" style={{ color: "red" }}>
                          {dateError3}
                        </p>
                      )}
                      {/* <p className="sessionDate">Saturday, 7th Oct 2023</p> */}
                    </div>
                  </div>
                  <div className="rowSet">
                    {sessions3.map((session) => (
                      <div
                        key={session.id}
                        className={
                          session.status === "Reserved"
                            ? "ntmiSessionItemWrapperReserved"
                            : "ntmiSessionItemWrapper"
                        }
                      >
                        <p className="ntmiActiveSessionDetails">
                          Time:<span>{session.time}</span>
                        </p>
                        <div>
                          <p className="ntmiActiveSessionDetails">
                            Active Bookings:
                            <span>{session.activeBookings}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className={`btn btn-primary buttonAvil ${
                            session.status === "Reserved" ? "btn-reserved" : ""
                          }`}
                          onClick={() => handleButtonClick3(session)}
                          disabled={
                            isAnySessionReserved3 ||
                            session.status === "Reserved"
                          }
                        >
                          {session.status}
                        </button>
                      </div>
                    ))}
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

export default TrainSessions;
