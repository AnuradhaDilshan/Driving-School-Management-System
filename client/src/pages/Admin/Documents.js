import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Admin.css";

const Documents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/dashboard/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((user) => user.role !== 1);

  return (
    <Layout title={"Payments | Savingo Driving School"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Documents</h2>
            <div className="process-wrapper">
              <div id="timeCard">
                <div className="sessionResultCardWrapper">
                  <table className="table table-transparent">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>Birth Certificate</th>
                        <th>B&W Photo</th>
                        <th>Medical Certificate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>
                            <Link
                              to={`/api/v1/document/document-photo/${user.nic}`}
                            >
                              View NIC
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/api/v1/document/document-photo/${user.nic}`}
                            >
                              View Birth Certificate
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/api/v1/document/document-photo/${user.nic}`}
                            >
                              View B&W Photo
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/api/v1/document/document-photo/${user.nic}`}
                            >
                              View Medical Certificate
                            </Link>
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

export default Documents;
