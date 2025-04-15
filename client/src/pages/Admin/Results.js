import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Test = () => {
  const [submitError, setSubmitError] = useState("");
  const [submitError1, setSubmitError1] = useState("");
  const [selectedNic, setSelectedNic] = useState("");
  const [selectedWMarks, setSelectedWMarks] = useState("");
  const [selectedNic1, setSelectedNic1] = useState("");
  const [selectedTMarks, setSelectedTMarks] = useState("");

  const handleNic = (event) => {
    const inputValue = event.target.value;
    setSelectedNic(inputValue);

    // Define regular expression patterns for NIC validation
    const pattern1 = /^[0-9]{9}(X|x|V|v)$/; // 9 numbers followed by X or V
    const pattern2 = /^[0-9]{12}$/; // 12 numbers

    // Check if the input matches either pattern
    if (
      inputValue.trim() !== "" &&
      !(pattern1.test(inputValue) || pattern2.test(inputValue))
    ) {
      setSubmitError("NIC Number is invalid.");
    } else {
      setSubmitError("");
    }
  };

  const handleWMarks = (event) => {
    const inputMarks = event.target.value;
    if (inputMarks <= 40) {
      setSelectedWMarks(inputMarks);
      setSubmitError("");
    } else {
      setSubmitError("Maximum Marks should be 40");
    }
  };

  const handleNic1 = (event) => {
    const inputValue1 = event.target.value;
    setSelectedNic1(inputValue1);

    // Define regular expression patterns for NIC validation
    const pattern1 = /^[0-9]{9}(X|x|V|v)$/; // 9 numbers followed by X or V
    const pattern2 = /^[0-9]{12}$/; // 12 numbers

    // Check if the input matches either pattern
    if (
      inputValue1.trim() !== "" &&
      !(pattern1.test(inputValue1) || pattern2.test(inputValue1))
    ) {
      setSubmitError1("NIC Number is invalid.");
    } else {
      setSubmitError1("");
    }
  };

  const handleTMarks = (event) => {
    const inputTMarks = event.target.value;
    if (inputTMarks <= 40) {
      setSelectedTMarks(inputTMarks);
      setSubmitError1("");
    } else {
      setSubmitError1("Maximum Marks should be 40");
    }
  };

  // Function to clear the selected date and time
  const handleClear = () => {
    setSelectedNic(""); // Reset the date input
    setSelectedWMarks(""); // Reset the time input
    setSubmitError("");
  };

  // Function to clear the selected date and time
  const handleClear1 = () => {
    setSelectedNic1(""); // Reset the date input
    setSelectedTMarks(""); // Reset the time input
    setSubmitError1("");
  };

  // Function to handle submission when the "Submit" button is clicked
  const handleSubmission = async (e) => {
    if (selectedNic && selectedWMarks) {
      setSubmitError("");

      try {
        const res = await axios.post("/api/v1/marks/results", {
          selectedNic,
          selectedWMarks,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSelectedNic("");
          setSelectedWMarks("");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      setSubmitError("Please fill both NIC and Marks before Submitting.");
    }
  };

  // Function to handle submission when the "Submit" button is clicked
  const handleSubmission1 = async (e) => {
    if (selectedNic1 && selectedTMarks) {
      setSubmitError1("");

      try {
        const res = await axios.post("/api/v1/marks/Testresults", {
          selectedNic1,
          selectedTMarks,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setSelectedNic1("");
          setSelectedTMarks("");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      setSubmitError1("Please fill both NIC and Marks before Submitting.");
    }
  };

  return (
    <Layout title={"Exam Results | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Results</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <div className="topics">
                    <p>Written Test</p>
                  </div>
                  <div className="input-container2">
                    <p>NIC : </p>
                    <input
                      type="text"
                      onChange={handleNic}
                      value={selectedNic}
                      className="nic-input"
                      required="true"
                    />
                    <p>Marks : </p>
                    <input
                      type="text"
                      onChange={handleWMarks}
                      value={selectedWMarks}
                      className="marks-input"
                      required="true"
                    />
                    <button
                      onClick={() => handleSubmission()}
                      className="submit-button"
                    >
                      Submit
                    </button>
                    <button onClick={handleClear} className="clear-button">
                      Clear
                    </button>
                  </div>
                  {submitError && (
                    <p className="error-message" style={errorStyles}>
                      {submitError}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <div className="topics">
                    <p>Driving Test</p>
                  </div>
                  <div className="input-container2">
                    <p>NIC : </p>
                    <input
                      type="text"
                      onChange={handleNic1}
                      value={selectedNic1}
                      className="nic-input"
                      required="true"
                    />
                    <p>Marks : </p>
                    <input
                      type="text"
                      onChange={handleTMarks}
                      value={selectedTMarks}
                      className="marks-input"
                      required="true"
                    />
                    <button
                      onClick={() => handleSubmission1()}
                      className="submit-button"
                    >
                      Submit
                    </button>
                    <button onClick={handleClear1} className="clear-button">
                      Clear
                    </button>
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
