import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import "../../styles/AuthStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        // Check the user's email and navigate accordingly
        if (email === "admin@admin.com") {
          navigate(location.state || "/dashboard/admin");
        } else {
          navigate(location.state || "/");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login | Savingo Driving School">
      <div className="containerm" id="containerm">
        <div className={`form-containerm ${isSignIn ? "sign-in" : "sign-up"}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isSignIn ? "Login" : "Forgot Password"}</h1>
            {/* <div className="social-icons">
              <a href="" className="icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="" className="icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>
              or use your registered email for{" "}
              {isSignIn ? "Login" : "Forgot Password"}
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            <button type="submit" className="btn btn-primary">
              {isSignIn ? "Login" : "Reset Password"}
            </button>

            <div className="toggle-containerm">
              <div className="toggle">
                <div
                  className={`toggle-panel toggle-right ${
                    isSignIn ? "" : "hidden"
                  }`}
                >
                  <h1>Forgot Password?</h1>
                  <p>
                    Do not worry, you can reset password entering your details
                  </p>
                  <button
                    type="button"
                    id="register"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/forgot-password");
                    }}
                  >
                    Forgot Password
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

export default Login;
