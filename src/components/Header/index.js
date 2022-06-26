import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Brand.png";
export default function Header() {
  const navigate = useNavigate();
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <nav className="navbar navbar-expand-lg  DefaultBg">
      <div className="container py-3  px-5">
        <img onClick={() => navigate("/")} src={Logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="text-white" icon={faBars} />
        </button>
        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav gap-2 align-items-center">
            <li className="nav-item text-white">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1.5px solid white" : "",
                })}
                to="jobsCatalog"
                className="fontSize text-white nav-link  borderLink"
              >
                Kasblar katalogi
              </NavLink>
            </li>
            <li className="nav-item text-white">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1.5px solid white" : "",
                })}
                to="quiz"
                className="fontSize text-white nav-link  borderLink"
              >
                Quiz
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1.5px solid white" : "",
                })}
                to={"about"}
                className="fontSize text-white nav-link  borderLink"
              >
                Biz haqimizda
              </NavLink>
            </li>
            <li className="nav-item text-white">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1.5px solid white" : "",
                })}
                to={"statistics"}
                className="fontSize text-white nav-link  borderLink"
              >
                Statistika
              </NavLink>
            </li>
            <li className="nav-item text-white">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1.5px solid white" : "",
                })}
                className="fontSize text-white nav-link borderLink"
                to={"contact"}
              >
                Aloqa
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
