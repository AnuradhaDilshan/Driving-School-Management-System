import React, { useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/User.css";
import book from "../../assets/milestones/echanelling-logo.png";

const MyJourney = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [Category, setCategory] = useState("Light-Weight Vehicle");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Practice, setPractice] = useState("With Practice");

  // Separate state variables for each upload section
  const [nicSelectedFile, setNicSelectedFile] = useState();
  const [birthCertificateSelectedFile, setBirthCertificateSelectedFile] =
    useState();
  const [medicalCertificateSelectedFile, setMedicalCertificateSelectedFile] =
    useState();
  const [idPhotoSelectedFile, setidPhotoSelectedFile] = useState();

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  const [file, setfile] = useState();

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post("http://localhost:3000/dashboard/user/my-journey", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [file1, setfile1] = useState();

  const handleUpload1 = (e) => {
    const formdata = new FormData();
    formdata.append("file", file1);
    axios
      .post("http://localhost:3000/dashboard/user/my-journey", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [file2, setfile2] = useState();

  const handleUpload2 = (e) => {
    const formdata = new FormData();
    formdata.append("file", file2);
    axios
      .post("http://localhost:3000/dashboard/user/my-journey", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [file3, setfile3] = useState();

  const handleUpload3 = (e) => {
    const formdata = new FormData();
    formdata.append("file", file3);
    axios
      .post("http://localhost:3000/dashboard/user/my-journey", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };

  //UPLOAD
  const [errorMessages, setErrorMessages] = useState("");

  const fileInputRefNic = useRef(null);
  const fileInputRefBirthCertificate = useRef(null);
  const fileInputRefIdPhoto = useRef(null);
  const fileInputRefMedicalCertificate = useRef(null);
  const uploadedFileNames = useRef([]);

  // Function to check if a file with the given name has been uploaded
  const isFileUploaded = (fileName) => {
    return uploadedFileNames.current.includes(fileName);
  };

  // Handle files selected using the file input field
  const handleFileInputChange = (e, section) => {
    const files = e.target.files;

    handleDroppedFiles(files, section);

    // Set state based on the section
    switch (section) {
      case "nic":
        setNicSelectedFile(files[0]);
        break;
      case "birthCertificate":
        setBirthCertificateSelectedFile(files[0]);
        break;
      case "idPhoto":
        setidPhotoSelectedFile(files[0]);
        break;
      case "medicalCertificate":
        setMedicalCertificateSelectedFile(files[0]);
        break;
      default:
        break;
    }
  };

  const handleDroppedFiles = (files, section) => {
    let errorMessage = "";

    if (files.length !== 1) {
      errorMessage = `Please upload only one file for ${section}.`;
    } else {
      const file = files[0];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      // Check if the file has already been uploaded to another section
      if (isFileUploaded(file.name)) {
        errorMessage = `File "${file.name}" has already been uploaded to another section and cannot be added.`;
      } else {
        const validExtensions = ["jpg", "jpeg", "png", "pdf"];

        // Add specific file extension validation based on the section
        switch (section) {
          case "nic":
          case "birthCertificate":
          case "idPhoto":
          case "medicalCertificate":
            if (!validExtensions.includes(fileExtension)) {
              errorMessage = `File "${file.name}" has an invalid extension for ${section} and was not added.`;
            } else {
              // Add the file name to the uploaded files list
              uploadedFileNames.current.push(file.name);
            }
            break;
          default:
            break;
        }

        if (!validExtensions.includes(fileExtension)) {
          errorMessage = `File "${file.name}" has an invalid extension and was not added.`;
        }
      }
    }

    setErrorMessages(errorMessage);
  };

  //Practice Type
  const handlePracticeChange = (event) => {
    setPractice(event.target.value);
  };

  //Vehicle Category Type
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSelectedOptions([]);
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const lightWeightOptions = [
    "A - Motorcycle Engine Capacity > 100cc",
    "B1 - Motor Tricycle - Tare <= 500kg, GVW >= 1000kg",
    "B - All Cars/Dual Purpose - GVW <= 3500kg, Passengers <= 8, Trailer <= 250kg",
  ];

  const heavyWeightOptions = [
    "C1 - Light Motor Lorry - 3500kg < GVW <= 17000kg, Trailer < 750kg",
    "C - Motor Lorry - GVW > 17000kg, Trailer <= 750kg",
    "D1 - Light Motor Coach - Passengers < 32, Trailer <= 750kg",
    "D - Motor Coach - Passengers > 32, Trailer <= 750kg",
  ];

  // Define prices for each option
  const prices = {
    "A - Motorcycle Engine Capacity > 100cc": 7500,
    "B1 - Motor Tricycle - Tare <= 500kg, GVW >= 1000kg": 11500,
    "B - All Cars/Dual Purpose - GVW <= 3500kg, Passengers <= 8, Trailer <= 250kg": 18500,
    "C1 - Light Motor Lorry - 3500kg < GVW <= 17000kg, Trailer < 750kg": 20500,
    "C - Motor Lorry - GVW > 17000kg, Trailer <= 750kg": 23500,
    "D1 - Light Motor Coach - Passengers < 32, Trailer <= 750kg": 27500,
    "D - Motor Coach - Passengers > 32, Trailer <= 750kg": 34500,
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Add price for each selected option
    selectedOptions.forEach((option) => {
      totalPrice += prices[option] || 0;
    });

    // Add price for practice type
    if (Practice === "With Practice") {
      totalPrice = totalPrice + 0.4 * totalPrice; // Set a price for with practice
    } else if (Practice === "Without Practice") {
      totalPrice += 0; // Set a price for without practice
    }

    // Add exam and other charges
    if (totalPrice > 0) {
      totalPrice = 500 + totalPrice;
    }

    return totalPrice;
  };

  const renderOptions = (options) => {
    return (
      <table className="blue-border-table">
        <tbody>
          {options.map((option) => (
            <tr key={option}>
              <td>{option}</td>
              <td className="checkbox-cell">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>Milestones</h2>
            <br />
            <div className="process-wrapper">
              <div id="progress-bar-container">
                <ul>
                  <li
                    className={`step step01 ${activeStep >= 1 ? "active" : ""}`}
                    onClick={() => handleStepClick(1)}
                  >
                    <div className="step-inner">Registration</div>
                  </li>
                  <li
                    className={`step step02 ${activeStep >= 2 ? "active" : ""}`}
                    onClick={() => handleStepClick(2)}
                  >
                    <div className="step-inner">Get Medical</div>
                  </li>
                  <li
                    className={`step step03 ${activeStep >= 3 ? "active" : ""}`}
                    onClick={() => handleStepClick(3)}
                  >
                    <div className="step-inner">Prepare Documents</div>
                  </li>
                  <li
                    className={`step step05 ${
                      activeStep === 4 ? "active" : ""
                    }`}
                    onClick={() => handleStepClick(4)}
                  >
                    <div className="step-inner">Submit & Pay</div>
                  </li>
                </ul>

                <div id="line">
                  <div
                    id="line-progress"
                    style={{ width: `${(activeStep - 1) * 33.5 + 0.5}%` }}
                  ></div>
                </div>
              </div>

              <div id="progress-content-section">
                {/* Add your content sections here */}
                {/* Example for the HOME SECTION */}
                <div
                  className={`section-content discovery ${
                    activeStep === 1 ? "active" : ""
                  }`}
                >
                  <h2>REGISTRATION SECTION</h2>
                  <p>
                    Congratulations! You have successfully registered with our
                    driving school system.
                    <br /> Welcome to a seamless and empowering journey towards
                    becoming a skilled and confident driver. Your registration
                    marks the beginning of a comprehensive learning experience
                    tailored to meet your unique needs. Our dedicated team is
                    committed to providing you with top-notch instruction,
                    cutting-edge resources, and a supportive environment as you
                    embark on this exciting road to mastering the art of
                    driving. Get ready to navigate the roads with confidence and
                    expertise. We look forward to accompanying you every step of
                    the way towards your driving success!
                  </p>
                </div>
              </div>

              <div id="progress-content-section">
                {/* Add your content sections here */}
                {/* Example for the HOME SECTION */}
                <div
                  className={`section-content discovery ${
                    activeStep === 2 ? "active" : ""
                  }`}
                >
                  <h2>MEDICAL CERTIFICATE SECTION</h2>
                  <p>
                    To ensure the safety and well-being of all drivers,
                    obtaining a medical certificate from the <br />
                    <b>National Transport Medical Institute (NTMI)</b> is a
                    crucial step in the licensing process. The NTMI plays a
                    pivotal role in assessing an individual's medical fitness
                    for driving. To initiate this process, you can book an
                    appointment with NTMI by visiting their official website.
                    The booking process is streamlined and user-friendly,
                    allowing you to select a convenient time for your medical
                    examination. During the appointment, qualified medical
                    professionals will conduct a thorough examination to assess
                    your physical and mental fitness for driving. Once the
                    assessment is complete and you meet the required medical
                    standards, you'll be issued a medical certificate. Take this
                    proactive step towards safe driving and book your NTMI
                    medical examination today.
                  </p>
                  <div className="channel">
                    <p>
                      Use eChannelling facility to book your Medical Examination
                    </p>
                    <a
                      class="booking-button"
                      href="https://echannelling.com/ntmi-channel-driving-licence-medical"
                      target="_blank"
                    >
                      <img src={book} alt="" class="booking-image" />
                      Book Now
                    </a>
                    <div className="note">
                      <p>
                        * Medical Certificates are valid for a period of 01 year
                        from the date of issue.
                        <br />* The Driving School bears no responsibility for
                        the financial aspects, including payments or any other
                        processes associated with obtaining the Medical
                        Certificate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="progress-content-section">
                {/* Add your content sections here */}
                {/* Example for the HOME SECTION */}
                <div
                  className={`section-content discovery ${
                    activeStep === 3 ? "active" : ""
                  }`}
                >
                  <h2>DOCUMENT SECTION</h2>
                  <p>
                    Embarking on the journey to obtain your driver's license?
                    <br />
                    Ensure you possess the essential documents :
                    <b>
                      <ul>
                        <li>Original copy of Birth Certificate</li>
                        <li>Clear copy of NIC (Certified by J/P)</li>
                        <li>Passport size B&W 5 photos</li>
                        <li>Medical Certificate (Issued by NTMI)</li>
                        {/* <li>
                          Copy of Old Driving License (For getting Heavy Vehicle
                          License)
                        </li> */}
                      </ul>
                    </b>
                    These documents serve as crucial prerequisites rather than
                    mere paperwork. They form the keynotes to facilitate your
                    journey toward obtaining a driver's license. Commence your
                    road adventure responsibly and in compliance with the
                    required documentation.
                  </p>
                  <div className="note">
                    <p>
                      * As part of our commitment to a streamlined and efficient
                      process, we encourage you to collect the necessary
                      documents as electronic files.
                      <br />* Scan or take clear photos of your original birth
                      certificate, NIC, existing driving license, passport-size
                      photos, and the medical certificate issued by NTMI,
                      ensuring that you have digital copies ready for a seamless
                      and convenient submission process.
                    </p>
                  </div>
                </div>
              </div>

              <div id="progress-content-section">
                {/* Add your content sections here */}
                {/* Example for the HOME SECTION */}
                <div
                  className={`section-content discovery ${
                    activeStep === 4 ? "active" : ""
                  }`}
                >
                  <h2>SUBMIT & PAY SECTION</h2>
                  <p>
                    In the final step of your journey, it's time to choose
                    vehicle categories you want, submit your documents and make
                    the payments to progress towards obtaining your driving
                    license.
                  </p>
                  <div className="vehicle-box">
                    <h3>
                      Vehicle Category<span style={errorStyle}>*</span>
                    </h3>
                    <div className="vehicle-option">
                      <div class="select-box">
                        <select
                          value={Category}
                          onChange={handleCategoryChange}
                          required
                        >
                          <option hidden>Choose Vehicle Category</option>
                          <option>Light-Weight Vehicle</option>
                          <option>Heavy-Weight Vehicle</option>
                        </select>
                      </div>
                      {Category === "Light-Weight Vehicle" &&
                        renderOptions(lightWeightOptions)}
                      {Category === "Heavy-Weight Vehicle" &&
                        renderOptions(heavyWeightOptions)}
                    </div>
                    <div className="practice-option">
                      <div className="practice">
                        <input
                          type="radio"
                          id="check-wpractice"
                          name="practice"
                          value="With Practice"
                          onChange={handlePracticeChange}
                          checked={Practice === "With Practice"}
                        />
                        <label htmlFor="check-wpractice">With Practice</label>
                      </div>
                      <div className="practice">
                        <input
                          type="radio"
                          id="check-wopractice"
                          name="practice"
                          value="Without Practice"
                          onChange={handlePracticeChange}
                          checked={Practice === "Without Practice"}
                        />
                        <label htmlFor="check-wopractice">
                          Without Practice
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Individual upload sections */}
                  <div className="rectangle">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="upload">
                          <h3>
                            NIC or Passport<span style={errorStyle}>*</span>
                          </h3>
                          <form id="uploadForm" encType="multipart/form-data">
                            <input
                              type="file"
                              id="fileInputNic"
                              name="nic"
                              onChange={(e) => setfile(e.target.files[0])}
                            />
                            <button onClick={handleUpload}>Upload</button>
                          </form>
                          <div id="fileList" className="file-list">
                            {nicSelectedFile && (
                              <div className="file-list-item">
                                <span>File: {nicSelectedFile.name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="upload">
                          <h3>
                            Birth Certificate<span style={errorStyle}>*</span>
                          </h3>
                          <form id="uploadForm" encType="multipart/form-data">
                            <input
                              type="file"
                              id="fileInputBirthCertificate"
                              name="birthCertificate"
                              onChange={(e) => setfile1(e.target.files[0])}
                            />
                            <button onClick={handleUpload1}>Upload</button>
                          </form>
                          <div id="fileList" className="file-list">
                            {birthCertificateSelectedFile && (
                              <div className="file-list-item">
                                <span>
                                  File: {birthCertificateSelectedFile.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="upload">
                          <h3>
                            B&W Photo
                            <span style={errorStyle}>*</span>
                          </h3>
                          <form id="uploadForm" encType="multipart/form-data">
                            <input
                              type="file"
                              id="fileInputIdPhoto"
                              name="idPhoto"
                              onChange={(e) => setfile2(e.target.files[0])}
                            />
                            <button onClick={handleUpload2}>Upload</button>
                          </form>
                          <div id="fileList" className="file-list">
                            {idPhotoSelectedFile && (
                              <div className="file-list-item">
                                <span>File: {idPhotoSelectedFile.name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="upload">
                          <h3>
                            Medical Certificate<span style={errorStyle}>*</span>
                          </h3>
                          <form id="uploadForm" encType="multipart/form-data">
                            <input
                              type="file"
                              id="fileInputMedicalCertificate"
                              name="medicalCertificate"
                              onChange={(e) => setfile3(e.target.files[0])}
                            />
                            <button onClick={handleUpload3}>Upload</button>
                          </form>
                          <div id="fileList" className="file-list">
                            {medicalCertificateSelectedFile && (
                              <div className="file-list-item">
                                <span>
                                  File: {medicalCertificateSelectedFile.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="error-messages">{errorMessages}</div>
                  </div>

                  <div className="price">
                    <p>
                      Total Price: <b>LKR.{calculateTotalPrice()}/-</b>
                    </p>
                  </div>
                  <div className="submit">
                    <div className="note">
                      <p>
                        * The Total Price includes the base fees, exam fees,
                        government tax, and VAT.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning button"
                      onClick={() => {
                        navigate("/dashboard/user/my-payments");
                      }}
                    >
                      Submit & Pay
                    </button>
                  </div>
                </div>
              </div>

              <div className="button-container">
                {activeStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="btn btn-secondary button"
                  >
                    {"< "}Previous
                  </button>
                )}

                {activeStep < 4 && (
                  <button
                    onClick={handleNext}
                    className="btn btn-primary button"
                  >
                    Next{" >"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const errorStyle = {
  color: "red",
  fontSize: "15px",
};

export default MyJourney;
