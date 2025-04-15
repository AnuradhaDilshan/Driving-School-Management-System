import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/User.css";

const MyPayments = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const [vehicleCat, setvehicleCat] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [enteredExpiryDate, setEnteredExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    axios
      .get("/dashboard/user")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/dashboard/user/vehicle-price")
      .then((vehicleCat) => setvehicleCat(vehicleCat.data))
      .catch((err) => console.log(err));
  }, []);

  const getUserDetails = (nic) => {
    const user = users.find((user) => user.nic === nic);
    const userCategory = getCategoryForUser(nic);
    const userVehicle = getVehicleForUser(nic);
    const userPractice = getCategoryPractice(nic);

    // Extracting the first and last 4 characters from NIC
    const nicPrefix = nic.slice(0, 4);
    const nicSuffix = nic.slice(-4);

    // Constructing payment ID based on vehicle weight and practice
    const paymentId =
      nicPrefix +
      (userCategory === "Light-Weight Vehicle" ? "LW" : "HW") + // Add LW or HW based on vehicle weight
      nicSuffix +
      (userPractice === "With Practice" ? "Y" : "N"); // Add W or O based on practice

    return {
      name: user ? user.name : "N/A",
      category: userCategory,
      vehicle: userVehicle,
      practice: userPractice,
      paymentId: paymentId,
    };
  };

  const filteredUsers = users.filter((user) => {
    return user.nic == auth?.user?.nic;
  });

  const getCategoryForUser = (nic) => {
    const userCategory = vehicleCat.find((category) => category.nic === nic);
    return userCategory ? userCategory.category : "N/A";
  };

  const getCategoryPractice = (nic) => {
    const userPractice = vehicleCat.find((practice) => practice.nic === nic);
    return userPractice ? userPractice.practice : "N/A";
  };

  const getCategoryPrice = (nic) => {
    const userPrice = vehicleCat.find((totalPrice) => totalPrice.nic === nic);
    const totalPriceFormatted = userPrice
      ? addCommas(userPrice.totalPrice)
      : "N/A";
    return totalPriceFormatted;
  };

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

  const handleCardNumberChange = (event) => {
    // Remove non-numeric characters
    const newCardNumber = event.target.value.replace(/\D/g, "");

    // Validate length and format with spaces
    if (newCardNumber.length <= 16) {
      const formattedCardNumber = newCardNumber
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setCardNumber(formattedCardNumber);
    }
  };

  const handleExpiryDateChange = (event) => {
    const enteredExpiryDate = event.target.value;

    // Remove non-numeric characters
    const numericExpiryDate = enteredExpiryDate.replace(/[^0-9]/g, "");

    // Extract the first two numbers and ensure they are between 01 and 12
    let monthPart = numericExpiryDate.slice(0, 2);
    if (monthPart.length === 2) {
      monthPart = Math.min(Math.max(parseInt(monthPart, 10), 1), 12)
        .toString()
        .padStart(2, "0");
    }

    // Extract the next two numbers (if any)
    const yearPart = numericExpiryDate.slice(2, 4);

    // Format the expiry date with a slash after the first two numbers
    const formattedExpiryDate = monthPart + (yearPart ? ` / ${yearPart}` : "");

    setEnteredExpiryDate(formattedExpiryDate);
  };

  const handleCvvChange = (event) => {
    // Remove non-numeric characters
    const newCvv = event.target.value.replace(/\D/g, "");

    // Validate length
    if (newCvv.length <= 3) {
      setCvv(newCvv);
    }
  };

  const handleProceedClick = async (e) => {
    e.preventDefault();

    try {
      const user = filteredUsers[0];
      const paymentId = getUserDetails(user.nic).paymentId;
      const res = await axios.post("/api/v1/payment/my-payments", {
        nic: auth?.user?.nic,
        paymentStatus: "Card",
        paymentId: paymentId,
      });

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/dashboard/user/learning-sessions");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const handleProceedDownload = async (e) => {
    e.preventDefault();

    try {
      const user = filteredUsers[0];
      const paymentId = getUserDetails(user.nic).paymentId;
      const res = await axios.post("/api/v1/payment/my-payments", {
        nic: auth?.user?.nic,
        paymentStatus: "Cash",
        paymentId: paymentId,
      });

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/dashboard/user/learning-sessions");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Layout title={"My Payments | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>Payments</h2>
            <br />
            <div className="process-wrapper">
              <div id="progress-content-section-train">
                <div className="sessionResultCardWrapper">
                  <div className="payment">
                    <div className="form-method">
                      <div className="payCards">
                        <div className="title1">
                          <div className="sessionDetailsHead">
                            <h4>Payment Details</h4>
                          </div>
                          <div className="sessionDetailsHead">
                            <div className="detail-pay">
                              {filteredUsers.map((user, index) => (
                                <div key={index}>
                                  Name: {getUserDetails(user.nic).name}
                                  <br />
                                  Payment ID:{" "}
                                  {getUserDetails(user.nic).paymentId}
                                  <br />
                                  Vehicle Category:{" "}
                                  {getUserDetails(user.nic).category}
                                  <br />
                                  Vehicle Types:{" "}
                                  {getUserDetails(user.nic).vehicle}
                                  <br />
                                  Practice: {getUserDetails(user.nic).practice}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="detail-payment">
                            {filteredUsers.map((user, index) => (
                              <div key={index}>
                                Total Price : {getCategoryPrice(user.nic)}LKR
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="title">
                          <div className="sessionDetailsHead">
                            <h4>Choose your Payment Method</h4>
                          </div>
                          <div className="sessionDetailsHead">
                            <form id="firstForm">
                              <input
                                type="radio"
                                name="payment"
                                id="visa"
                                style={{ display: "none" }}
                              />
                              <input
                                type="radio"
                                name="payment"
                                id="mastercard"
                                style={{ display: "none" }}
                              />
                              <input
                                type="radio"
                                name="payment"
                                id="paypal"
                                style={{ display: "none" }}
                              />
                              <input
                                type="radio"
                                name="payment"
                                id="AMEX"
                                style={{ display: "none" }}
                              />
                              <div className="category">
                                <label htmlFor="visa" className="visaMethod">
                                  <div className="imgName">
                                    <div className="imgContainer-visa">
                                      <img
                                        src="https://i.ibb.co/vjQCN4y/Visa-Card.png"
                                        alt="visa"
                                      />
                                    </div>
                                    <span className="name">VISA</span>
                                  </div>
                                  <span className="check">
                                    <i
                                      className="fa-solid fa-circle-check"
                                      style={{ color: "#6064b6" }}
                                    />
                                  </span>
                                </label>
                                <label
                                  htmlFor="mastercard"
                                  className="mastercardMethod"
                                >
                                  <div className="imgName">
                                    <div className="imgContainer-mastercard">
                                      <img
                                        src="https://i.ibb.co/vdbBkgT/mastercard.jpg"
                                        alt="mastercard"
                                      />
                                    </div>
                                    <span className="name">Mastercard</span>
                                  </div>
                                  <span className="check">
                                    <i
                                      className="fa-solid fa-circle-check"
                                      style={{ color: "#6064b6" }}
                                    />
                                  </span>
                                </label>
                                <label
                                  htmlFor="paypal"
                                  className="paypalMethod"
                                >
                                  <div className="imgName">
                                    <div className="imgContainer-paypal">
                                      <img
                                        src="https://i.ibb.co/KVF3mr1/paypal.png"
                                        alt="paypal"
                                      />
                                    </div>
                                    <span className="name">Paypal</span>
                                  </div>
                                  <span className="check">
                                    <i
                                      className="fa-solid fa-circle-check"
                                      style={{ color: "#6064b6" }}
                                    />
                                  </span>
                                </label>
                                <label htmlFor="AMEX" className="amexMethod">
                                  <div className="imgName">
                                    <div className="imgContainer-AMEX">
                                      <img
                                        src="https://i.ibb.co/wQnrX86/American-Express.jpg"
                                        alt="amex"
                                      />
                                    </div>
                                    <span className="name">AMEX</span>
                                  </div>
                                  <span className="check">
                                    <i
                                      className="fa-solid fa-circle-check"
                                      style={{ color: "#6064b6" }}
                                    />
                                  </span>
                                </label>
                              </div>
                            </form>
                          </div>
                          <div className="sessionDetailsHead">
                            <form id="secondForm">
                              <div className="filling">
                                <div className="card-item">
                                  <label className="label">Name on Card:</label>
                                  <input
                                    type="text"
                                    className="input"
                                    placeholder="Name on Card"
                                  />
                                </div>
                                <div className="card-item-1">
                                  <label className="label">Card Number:</label>
                                  <input
                                    type="text"
                                    className="input"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    placeholder="0000 0000 0000 0000"
                                  />
                                </div>
                                <div className="card-grp space">
                                  <div className="card-item-2">
                                    <label className="label">
                                      Expiry Date:
                                    </label>
                                    <input
                                      type="text"
                                      name="expiry-data"
                                      className="input"
                                      value={enteredExpiryDate}
                                      onChange={handleExpiryDateChange}
                                      placeholder="MM / YY"
                                    />
                                  </div>
                                  <div className="card-item-3">
                                    <label className="label">CVV:</label>
                                    <input
                                      type="text"
                                      className="input"
                                      value={cvv}
                                      onChange={handleCvvChange}
                                      placeholder="000"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="checkout">
                                <button
                                  type="button"
                                  className="btn btn-warning button"
                                  onClick={handleProceedClick}
                                >
                                  Pay Now
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="detail-payNEW1">
                            *By proceeding you agree to the Terms and
                            Conditions.
                          </div>
                        </div>
                      </div>
                      <div className="title2">
                        <div className="sessionDetailsHead">
                          <h4>Pay Cash</h4>
                        </div>
                        <div className="detail-payNEW">
                          To ensure a seamless and secure transaction, we kindly
                          request your physical presence at our branch. Our
                          Staff is here to assist you personally.
                          <div className="checkout">
                            <button
                              type="button"
                              className="btn btn-warning button"
                              onClick={handleProceedDownload}
                            >
                              Pay Later
                            </button>
                          </div>
                        </div>
                      </div>
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

export default MyPayments;
