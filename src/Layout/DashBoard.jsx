import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useCart } from "../hooks/useCart";

export const Dashboard = () => {
    const [cart] = useCart();
  return (
    <>
     <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to='/dashboard/mycart'>
                <FaHome></FaHome>User Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/mycart'>
                <FaCalendarAlt></FaCalendarAlt>Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/mycart'>
                <FaWallet></FaWallet>Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/mycart'>
                <FaShoppingCart></FaShoppingCart>My Cart
                <span className="badge badge-secondary">+{cart?.length || 0}</span>
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to='/'>
                <FaCalendarAlt></FaCalendarAlt>Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/menu'>
                <FaWallet></FaWallet>Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/order/salad'>
                <FaShoppingCart></FaShoppingCart>Order Food
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};
