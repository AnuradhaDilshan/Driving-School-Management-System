import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleCat, setvehicleCat] = useState([]);

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

  const filteredUsers = users.filter((user) => {
    const searchValue = searchQuery.toLowerCase();
    return (
      (user.name.toLowerCase().includes(searchValue) && user.role !== 1) ||
      (user.nic.includes(searchValue) && user.role !== 1) ||
      (user.email.toLowerCase().includes(searchValue) && user.role !== 1) ||
      (user.phone.includes(searchValue) && user.role !== 1)
    );
  });

  const getCategoryForUser = (nic) => {
    const userCategory = vehicleCat.find((category) => category.nic === nic);
    return userCategory ? userCategory.category : "N/A";
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

  return (
    <Layout title={"Admin Dashboard | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8 justify-content-center align-items-center">
            <div className="card w-90 p-3">
              <div class="form-outline p-2">
                <input
                  type="text"
                  id="form1"
                  class="form-control custom-search-input"
                  aria-label="Search"
                  placeholder="Search Users"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>NIC</th>
                    <th>Email Address</th>
                    <th>Vehicle Category</th>
                    <th>Vehicle Types</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.nic}</td>
                      <td>{user.email}</td>
                      <td>{getCategoryForUser(user.nic)}</td>
                      <td>{getVehicleForUser(user.nic)}</td>
                      <td>{user.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
