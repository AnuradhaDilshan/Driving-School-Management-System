import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/documents"
            className="list-group-item list-group-item-action"
          >
            Documents
          </NavLink>
          <NavLink
            to="/dashboard/admin/courses"
            className="list-group-item list-group-item-action"
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard/admin/bookings"
            className="list-group-item list-group-item-action"
          >
            Training Bookings
          </NavLink>
          <NavLink
            to="/dashboard/admin/test"
            className="list-group-item list-group-item-action"
          >
            Driving Test
          </NavLink>
          <NavLink
            to="/dashboard/admin/results"
            className="list-group-item list-group-item-action"
          >
            Exam Results
          </NavLink>
          <NavLink
            to="/dashboard/admin/payments"
            className="list-group-item list-group-item-action"
          >
            Payments
          </NavLink>
          <NavLink
            to="/dashboard/admin/feedbacks"
            className="list-group-item list-group-item-action"
          >
            Feedbacks
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
