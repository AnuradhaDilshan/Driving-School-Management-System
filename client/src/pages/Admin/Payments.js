import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Payments = () => {
  const [users, setUsers] = useState([]);
  const [vehicleCat, setvehicleCat] = useState([]);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
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
      .get("/dashboard/admin/payments")
      .then((payment) => setPayment(payment.data))
      .catch((err) => console.log(err));
  }, []);

  const getPaymentForUser = (nic) => {
    const userPayment = payment.find((paymentId) => paymentId.nic === nic);
    return userPayment ? userPayment.paymentId : "N/A";
  };

  const getPaymentComing = (nic) => {
    const userPay = payment.find((paymentStatus) => paymentStatus.nic === nic);
    return userPay && userPay.paymentStatus ? userPay.paymentStatus : "N/A";
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getPriceForUser = (nic) => {
    const userPrice = vehicleCat.find((totalPrice) => totalPrice.nic === nic);
    return userPrice ? formatPrice(userPrice.totalPrice) : "N/A";
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

  const filteredUsers = users.filter((user) => {
    return vehicleCat.some((category) => category.nic === user.nic);
  });

  return (
    <Layout title={"Payments | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Payments</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Payment ID</th>
                        <th>Vehicle Category</th>
                        <th>Total Price</th>
                        <th>Method</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{getPaymentForUser(user.nic)}</td>
                          <td>{getVehicleForUser(user.nic)}</td>
                          <td>{getPriceForUser(user.nic)} LKR</td>
                          <td>{getPaymentComing(user.nic)}</td>
                          <td>
                            <button
                              id="stats"
                              className={
                                getPaymentForUser(user.nic) === "N/A"
                                  ? "not-activeNEW"
                                  : getPaymentComing(user.nic) === "Cash"
                                  ? "not-active2"
                                  : "activeNEW"
                              }
                            >
                              {getPaymentForUser(user.nic) === "N/A"
                                ? "NOT PAID"
                                : getPaymentComing(user.nic) === "Cash"
                                ? "PENDING"
                                : "PAID ✅"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
