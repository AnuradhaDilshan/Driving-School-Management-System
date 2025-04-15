import React from "react";
import { NavLink } from "react-router-dom";
import advertise from "../../assets/advertise.png";
import "../../.././src/App.css";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/my-journey"
            className="list-group-item list-group-item-action"
          >
            My Journey
          </NavLink>
          <NavLink
            to="/dashboard/user/my-payments"
            className="list-group-item list-group-item-action"
          >
            My Payments
          </NavLink>
          <NavLink
            to="/dashboard/user/learning-sessions"
            className="list-group-item list-group-item-action"
          >
            Learning Sessions
          </NavLink>
          <NavLink
            to="/dashboard/user/training-sessions"
            className="list-group-item list-group-item-action"
          >
            Training Sessions
          </NavLink>
          <NavLink
            to="/dashboard/user/driving-test"
            className="list-group-item list-group-item-action"
          >
            Driving Test
          </NavLink>
        </div>
        <div className="advertise">
          <NavLink to="/about" className="advertise-area">
            <img src={advertise} alt="" class="advertise-image" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
