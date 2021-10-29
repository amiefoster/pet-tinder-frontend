import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div>
      <div className="navbar navbar-light nav-bar-styling rounded">
        <div className="container">
          <NavLink
            to="/"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h3><img src={logo} className="logo" /></h3>
          </NavLink>
          <NavLink
            to="/FindMatches"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h3>Find Matches</h3>
          </NavLink>
          <NavLink
            to="/Matches"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h3>View Matches</h3>
          </NavLink>
          <NavLink
            to="/UserProfile"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h3>Your Profile</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
