import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
        <div className="main-navbar">
          <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
            <a
              className="navbar-brand w-100 mr-0"
              href="/"
              style={{ lineHeight: 25 }}
            >
              <div className="d-table m-auto">
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ maxWidth: 60 }}
                  src="assets/fi-logo.jpg"
                  alt="Shards Dashboard"
                />
                <span className="d-none d-md-inline ml-1">
                  Shards Dashboard
                </span>
              </div>
            </a>
            <a
              className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
              href="/"
            >
              <i className="material-icons"></i>
            </a>
          </nav>
        </div>
        <form
          action="#"
          className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
        >
          <div className="input-group input-group-seamless ml-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-search" />
              </div>
            </div>
            <input
              className="navbar-search form-control"
              type="text"
              placeholder="Search for something..."
              aria-label="Search"
            />{" "}
          </div>
        </form>
        <div className="nav-wrapper">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-icons">edit</i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 <i className="material-icons">dynamic_form</i>
                <span>Forms</span>
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/user_profile">
                <i className="material-icons">person</i>
                <span>User Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
