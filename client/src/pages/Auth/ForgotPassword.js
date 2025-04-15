import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [nic, setNic] = useState("");

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const handleNewPasswordChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);

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

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        nic,
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
    <Layout title={"Reset Password | Savingo Driving School"}>
      <div className="containerm" id="containerm">
        <div className={`form-containerm ${isSignIn ? "sign-in" : "sign-up"}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isSignIn ? "Reset Password" : "Login"}</h1>
            <span>
              use your email and nic for {isSignIn ? "Reset Password" : "Login"}
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="text"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your NIC"
              required
            />
            <input
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your New Password"
              required
            />
            {passwordError && (
              <p className="error-message" style={errorStyles}>
                {passwordError}
              </p>
            )}
            <button type="submit" className="btn btn-primary">
              {isSignIn ? "Reset Password" : "Login"}
            </button>

            <div className="toggle-containerm">
              <div className="toggle">
                <div
                  className={`toggle-panel toggle-right ${
                    isSignIn ? "" : "hidden"
                  }`}
                >
                  <h1>Need to Login?</h1>
                  <p>
                    Just click the button on below,
                    <br /> Simple. Right!
                  </p>
                  <button
                    type="button"
                    id="login"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Back To Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const errorStyles = {
  color: "red",
  fontSize: "11.5px",
};

export default ForgotPasssword;
