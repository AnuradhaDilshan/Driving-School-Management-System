import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import happy_boy from "./../../assets/happy-boy.png";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/User.css";

const Trail = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [results1, setResults1] = useState([]);
  const [drivingtests, setDrivingtests] = useState([]);
  const [userChoice, setUserChoice] = useState(null);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/driving-test-dates")
      .then((results) => setResults(results.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/driving-test-datesnew")
      .then((results1) => setResults1(results1.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/driving-test")
      .then((drivingtests) => setDrivingtests(drivingtests.data))
      .catch((err) => console.log(err));
  }, []);

  const matchedResult = results.find((result) =>
    result.selectedUsers.includes(auth?.user?.nic)
  );

  const matchedResult1 = results1.find((result) =>
    result.selectedUsers1.includes(auth?.user?.nic)
  );

  const matchingTests = drivingtests.filter(
    (test) => test.selectedNic1 === auth?.user?.nic
  );

  const getPassStatus = (marks) => {
    return marks >= 30 ? "Pass" : "Fail";
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const showResultsButton = matchingTests.some(
    (test) => getPassStatus(parseInt(test.selectedTMarks)) === "Fail"
  );

  const showButton =
    matchingTests.length > 0 &&
    matchingTests.some(
      (test) =>
        test.selectedTMarks !== undefined &&
        test.selectedNic1 === auth?.user?.nic
    ) &&
    showResultsButton;

  const isUserInDatabase = matchingTests.length > 0;

  const handleSubmission = async (status) => {
    try {
      const res = await axios.post("/api/v1/checking/testAttendance", {
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

  useEffect(() => {
    const userNIC = auth?.user?.nic;
    axios
      .get(`/dashboard/user/testaccept?nic=${userNIC}`)
      .then((testAccept) => {
        const receivedNIC = testAccept.data.nic;
        const userStatus =
          receivedNIC === userNIC ? testAccept.data.status : null;

        if (userStatus) {
          setUserChoice(userStatus);
        }
      })
      .catch((err) => console.log(err));
  }, [auth?.user?.nic]);

  return (
    <Layout title={"Driving Test | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">{!showPopup && <UserMenu />}</div>
          <div className="col-md-9">
            <h2>Practical Exam</h2>
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
                              matchedResult1?.selectedDate1 ||
                              "Not Fixed"}
                          </span>
                          <br />
                          Time :{" "}
                          <span className="marksHigh">
                            {matchedResult?.selectedTime ||
                              matchedResult1?.selectedTime1 ||
                              "Not Fixed"}
                          </span>
                          {(matchedResult?.selectedDate ||
                            matchedResult1?.selectedDate1) && (
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
                              {test.selectedTMarks !== undefined
                                ? test.selectedTMarks
                                : "Not Fixed"}
                            </span>
                            {test.selectedTMarks !== undefined &&
                              getPassStatus(parseInt(test.selectedTMarks)) ===
                                "Fail" && (
                                <span className="marksHigh">
                                  {getPassStatus(parseInt(test.selectedTMarks))}
                                </span>
                              )}
                          </span>
                        ))}
                        {matchingTests.length === 0 && (
                          <span className="marksHigh">Not Fixed</span>
                        )}
                        {isUserInDatabase && (
                          <div className="resultsShowing">
                            {!showButton ? (
                              <button onClick={openPopup} className="show1">
                                Show Results
                              </button>
                            ) : (
                              <span>
                                <p className="notesNEW">
                                  <b>
                                    * Try again to get new dates by contacting
                                    our instructor
                                  </b>
                                </p>
                              </span>
                            )}
                          </div>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Popup closePopup={closePopup} />}
    </Layout>
  );
};

const Popup = ({ closePopup }) => {
  const navigate = useNavigate();

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="finish">
          <ul>
            <li>C</li>
            <li>O</li>
            <li>N</li>
            <li>G</li>
            <li>R</li>
            <li>A</li>
            <li>T</li>
            <li>U</li>
            <li>L</li>
            <li>A</li>
            <li>T</li>
            <li>I</li>
            <li>O</li>
            <li>N</li>
            <li>S</li>
            <li>!</li>
            <li>!</li>
            <li>!</li>
          </ul>
        </div>
        <Confetti width={2000} height={1000} />
        <img src={happy_boy} alt="" className="happy" />
        <br />
        <p className="congrats">
          This achievement is a significant milestone that represents your
          commitment to safe and responsible driving. Enjoy this newfound
          privilege, and remember to always drive safely and responsibly.
        </p>
        <br />
        <button
          onClick={() => {
            navigate("/dashboard/user/feedback");
          }}
          className="closing-item"
        >
          Feedback
        </button>
      </div>
    </div>
  );
};

export default Trail;
