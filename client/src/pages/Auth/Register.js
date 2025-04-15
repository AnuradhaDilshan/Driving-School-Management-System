import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../.././src/App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const [reenteredPassword, setReenteredPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState("");
  const [errorNIC, setErrorNIC] = useState("");
  const [errorPassport, setErrorPassport] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleFindClick = () => {
    let dayText = 0;
    let year = "";
    let month = "";
    let day = "";

    // Year
    if (nic.length === 10) {
      year = "19" + nic.substr(0, 2);
      dayText = parseInt(nic.substr(2, 3));
    } else {
      year = nic.substr(0, 4);
      dayText = parseInt(nic.substr(4, 3));
    }

    // Gender
    if (dayText > 500) {
      setGender("Female");
      dayText = dayText - 500;
    } else {
      setGender("Male");
    }

    // Month
    if (dayText > 335) {
      day = dayText - 335;
      month = "December";
    } else if (dayText > 305) {
      day = dayText - 305;
      month = "November";
    } else if (dayText > 274) {
      day = dayText - 274;
      month = "October";
    } else if (dayText > 244) {
      day = dayText - 244;
      month = "September";
    } else if (dayText > 213) {
      day = dayText - 213;
      month = "August";
    } else if (dayText > 182) {
      day = dayText - 182;
      month = "July";
    } else if (dayText > 152) {
      day = dayText - 152;
      month = "June";
    } else if (dayText > 121) {
      day = dayText - 121;
      month = "May";
    } else if (dayText > 91) {
      day = dayText - 91;
      month = "April";
    } else if (dayText > 60) {
      day = dayText - 60;
      month = "March";
    } else if (dayText < 32) {
      month = "January";
      day = dayText;
    } else if (dayText > 31) {
      day = dayText - 31;
      month = "February";
    }
    setDob(`${year}-${month}-${day}`);
    // Calculate Age
    let today = new Date();
    let birthday = new Date(`${year}-${month}-${day}`);
    let yearsOld = Math.floor((today - birthday) / (365 * 24 * 3600 * 1000));

    setAge(`${yearsOld}`);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate the password
    const isValidPassword = validatePassword(newPassword);
    if (newPassword.trim() !== "" && !isValidPassword) {
      setPasswordError(
        "Password should contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleReenteredPasswordChange = (e) => {
    const newReenteredPassword = e.target.value;
    setReenteredPassword(newReenteredPassword);

    // Check if passwords match
    if (
      newReenteredPassword.trim() !== "" &&
      password !== newReenteredPassword
    ) {
      setPasswordsMatchError("Passwords do not match.");
    } else {
      setPasswordsMatchError("");
    }
  };

  // Password validation function
  const validatePassword = (password) => {
    // Define your password validation rules here
    const lengthRegex = /^.{8,}$/; // Minimum length of 8 characters
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  //NIC Validation
  const handleNicChange = (e) => {
    const inputValue = e.target.value;
    setNic(inputValue);

    // Define regular expression patterns for NIC validation
    const pattern1 = /^[0-9]{9}(X|x|V|v)$/; // 9 numbers followed by X or V
    const pattern2 = /^[0-9]{12}$/; // 12 numbers

    // Check if the input matches either pattern
    if (
      inputValue.trim() !== "" &&
      !(pattern1.test(inputValue) || pattern2.test(inputValue))
    ) {
      setErrorNIC(
        "NIC Number is invalid. It must be either 9 numbers followed by 'X' or 'V' or 12 numbers."
      );
    } else {
      setErrorNIC("");
    }
  };

  //Passport Validation
  const handlePassportChange = (e) => {
    const inputValue = e.target.value;
    setPassport(inputValue);

    const passportPattern1 = /^[A-Z]{1}[0-9]{8}$/;
    const passportPattern2 = /^[A-Z]{2}[0-9]{7}$/;
    const passportPattern3 = /^[0-9]{9}$/;

    // Check if the input matches either pattern
    if (
      inputValue.trim() !== "" &&
      !(
        passportPattern1.test(inputValue) ||
        passportPattern2.test(inputValue) ||
        passportPattern3.test(inputValue)
      )
    ) {
      setErrorPassport(
        "Passport ID is invalid. It must be either started with one or two uppercase letters with numbers or 9 numbers."
      );
    } else {
      setErrorPassport("");
    }
  };

  //Email Validation
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Define a regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Check if the input matches the email pattern
    if (inputValue.trim() !== "" && !emailPattern.test(inputValue)) {
      setErrorMail("Please enter a valid email address.");
    } else {
      setErrorMail("");
    }
  };

  //Phone Number Validation
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    setPhone(inputValue);

    // Only perform validation when the input is not empty
    if (inputValue.trim() !== "") {
      // Remove any non-digit characters (e.g., spaces, dashes, parentheses)
      const phoneNumber = inputValue.replace(/\D/g, "");

      // Define the allowed prefixes
      const allowedPrefixes = [
        "070",
        "071",
        "072",
        "074",
        "075",
        "076",
        "077",
        "078",
      ];

      if (!allowedPrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
        setErrorPhone(
          "Your phone number must start with 070, 071, 072, 074, 075, 076, 077, or 078 and contain 10 digits."
        );
      } else if (phoneNumber.length !== 10) {
        setErrorPhone("Your phone number must contain 10 digits.");
      } else {
        // Clear the error message when the input is valid
        setErrorPhone("");
      }
    } else {
      // Clear the error message when the input is empty
      setErrorPhone("");
    }
  };

  //Form Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        nic,
        passport,
        gender,
        email,
        dob,
        age,
        phone,
        address,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register | Savingo Driving School"}>
      <div className="body">
        <section className="register">
          <div className="section-header text-center pb-3">
            <h2>Registration Form</h2>
            <p>Fill out the form carefully for registration</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-box">
              <label>
                Full Name<span style={errorStyle}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className="form-control"
                id="exampleInputName"
                required
                autoFocus
              />
            </div>
            <div className="column">
              <div className="input-box">
                <label>
                  National Identify Card<span style={errorStyle}>*</span>
                </label>
                <input
                  type="text"
                  value={nic}
                  onChange={handleNicChange}
                  placeholder="Enter NIC Number"
                  className="form-control"
                  id="exampleInputNIC"
                  required
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorNIC}
                </p>
              </div>
              <div className="input-box">
                <label>Passport ID</label>
                <input
                  type="text"
                  value={passport}
                  onChange={handlePassportChange}
                  placeholder="Enter Passport ID"
                  className="form-control"
                  id="exampleInputPassport"
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorPassport}
                </p>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>
                  Email Address<span style={errorStyle}>*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className="form-control"
                  id="exampleInputEmail"
                  required
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorMail}
                </p>
              </div>
              <div className="input-box">
                <label>
                  Phone Number<span style={errorStyle}>*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter Phone Number"
                  className="form-control"
                  id="exampleInputPhone"
                  required
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorPhone}
                </p>
              </div>
            </div>
            <div className="input-box address">
              <label>
                Address<span style={errorStyle}>*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                className="form-control"
                id="exampleInputAddress"
                required
              />
            </div>
            <div className="column" id="pass">
              <div className="input-box">
                <label>
                  Password<span style={errorStyle}>*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Enter Password"
                  required
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="error-messageNew" style={errorStyles}>
                    {passwordError}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label>
                  Re-Enter Password<span style={errorStyle}>*</span>
                </label>
                <input
                  type="password"
                  value={reenteredPassword}
                  className="form-control"
                  placeholder="Re-Enter Password"
                  required
                  onChange={handleReenteredPasswordChange}
                />
                {passwordsMatchError && (
                  <p className="error-messageNew" style={errorStyles}>
                    {passwordsMatchError}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleFindClick}
              className="btn btn-warning button"
            >
              Submit
            </button>
          </form>
        </section>
        {/* BACK TO TOP BUTTON */}
        <a href="#" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
      </div>
    </Layout>
  );
};

const errorStyles = {
  color: "red",
  fontSize: "11.5px",
};

const errorStyle = {
  color: "red",
  fontSize: "16px",
};

export default Register;
