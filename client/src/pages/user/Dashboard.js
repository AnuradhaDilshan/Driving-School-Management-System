import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/Layout/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"My Dashboard | Savingo Driving School"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-80 p-3">
              <h6>Name : {auth?.user?.name}</h6>
              <h6>NIC : {auth?.user?.nic}</h6>
              <h6>Passpost No : {auth?.user?.passport}</h6>
              <h6>Email : {auth?.user?.email}</h6>
              <h6>Date of Birth : {auth?.user?.dob}</h6>
              <h6>Age : {auth?.user?.age}</h6>
              <h6>Gender : {auth?.user?.gender}</h6>
              <h6>Phone : {auth?.user?.phone}</h6>
              <h6>Address : {auth?.user?.address}</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
