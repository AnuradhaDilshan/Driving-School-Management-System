import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/User.css";

const LearnSessions = () => {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [results1, setResults1] = useState([]);
  const [writtentests, setWrittentests] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [userChoice1, setUserChoice1] = useState(null);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/written-test-dates")
      .then((results) => setResults(results.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/written-test-datesnew")
      .then((results1) => setResults1(results1.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/learning-sessions")
      .then((writtentests) => setWrittentests(writtentests.data))
      .catch((err) => console.log(err));
  }, []);

  const matchedResult = results.find((result) =>
    result.selectedUsers.includes(auth?.user?.nic)
  );

  const matchedResult1 = results1.find((result) =>
    result.selectedUsers1.includes(auth?.user?.nic)
  );

  const matchingTests = writtentests.filter(
    (test) => test.selectedNic === auth?.user?.nic
  );

  const getPassStatus = (marks) => {
    return marks >= 30 ? "Pass" : "Fail";
  };

  const handleSubmission = async (status) => {
    try {
      const res = await axios.post("/api/v1/checking/classAttendance", {
        nic: auth?.user?.nic,
        status: status,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setUserChoice(status);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleSubmission1 = async (status) => {
    try {
      const res = await axios.post("/api/v1/checking/examAttendance", {
        nic: auth?.user?.nic,
        status: status,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setUserChoice1(status);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const userNIC = auth?.user?.nic;
    axios
      .get(`/dashboard/user/classaccept?nic=${userNIC}`)
      .then((classAccept) => {
        const receivedNIC = classAccept.data.nic;
        const userStatus =
          receivedNIC === userNIC ? classAccept.data.status : null;

        if (userStatus) {
          setUserChoice(userStatus);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  useEffect(() => {
    const userNIC1 = auth?.user?.nic;
    axios
      .get(`/dashboard/user/examaccept?nic=${userNIC1}`)
      .then((examAccept) => {
        const receivedNIC1 = examAccept.data.nic;
        const userStatus1 =
          receivedNIC1 === userNIC1 ? examAccept.data.status : null;

        if (userStatus1) {
          setUserChoice1(userStatus1);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  return (
    <Layout title={"Learning Sessions | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>Class Time</h2>
            <br />
            <div className="process-wrapper">
              <div id="classCard">
                <div id="progress-content-section-train">
                  <div className="sessionResultCardWrapper">
                    <div className="sessionDetailsHead">
                      <div>
                        <p className="session">
                          Date :{" "}
                          <span className="marksHigh">
                            {matchedResult?.selectedDate ||
                              matchedResult1?.selectedDate2 ||
                              "Not Fixed"}
                          </span>
                          <br />
                          Time :{" "}
                          <span className="marksHigh">
                            {matchedResult?.selectedTime ||
                              matchedResult1?.selectedTime2 ||
                              "Not Fixed"}
                          </span>
                          {(matchedResult?.selectedDate ||
                            matchedResult1?.selectedDate2) && (
                            <div className="accepting">
                              {userChoice ? (
                                <div className="user-choice-result">
                                  <p>Your choice : {userChoice}</p>
                                </div>
                              ) : (
                                <div>
                                  <button
                                    type="submit"
                                    className="btn-accept"
                                    onClick={() => handleSubmission("Accept")}
                                  >
                                    Accept
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn-reject"
                                    onClick={() => handleSubmission("Reject")}
                                  >
                                    Reject
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </p>
                      </div>
                    </div>
                    <p className="important">
                      * If this date and time are convenient for you, please
                      click the "Accept" button and reserve your attendance seat
                      in the class.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Written Exam</h2>
            <br />
            <div className="process-wrapper">
              <div id="classCard">
                <div id="progress-content-section-train">
                  <div className="sessionResultCardWrapper">
                    <div className="sessionDetailsHead">
                      <div>
                        <p className="session">
                          Date :{" "}
                          <span className="marksHigh">
                            {matchedResult?.selectedDate1 ||
                              matchedResult1?.selectedDate3 ||
                              "Not Fixed"}
                          </span>
                          <br />
                          Time :{" "}
                          <span className="marksHigh">
                            {matchedResult?.selectedTime1 ||
                              matchedResult1?.selectedTime3 ||
                              "Not Fixed"}
                          </span>
                          {(matchedResult?.selectedDate1 ||
                            matchedResult1?.selectedDate3) && (
                            <div className="accepting">
                              {userChoice1 ? (
                                <div className="user-choice-result">
                                  <p>Your choice : {userChoice1}</p>
                                </div>
                              ) : (
                                <div>
                                  <button
                                    type="submit"
                                    className="btn-accept"
                                    onClick={() => handleSubmission1("Accept")}
                                  >
                                    Accept
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn-reject"
                                    onClick={() => handleSubmission1("Reject")}
                                  >
                                    Reject
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="sessionDetailsHead">
                      <p className="important1">
                        * If this date and time is convenient for you, please
                        click the "Accept" button and mark your attendance for
                        the exam.
                        <p className="notes">
                          <b>* Just a reminder -</b> if you are "rejected" on
                          this date, you will have to pay additional fees to
                          re-apply for the exam.
                        </p>
                      </p>
                    </div>
                    <div>
                      <p className="marks">
                        Marks:
                        {matchingTests.map((test) => (
                          <span key={test.id}>
                            <span className="marksHigh">
                              {test.selectedWMarks}
                            </span>
                            <span className="marksHigh">
                              {getPassStatus(parseInt(test.selectedWMarks))}
                            </span>
                          </span>
                        ))}
                      </p>
                    </div>
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

export default LearnSessions;
