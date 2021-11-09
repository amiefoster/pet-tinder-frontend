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
            <h4><img src={logo} className="logo" /></h4>
          </NavLink>
          
          <NavLink
            to="/FindMatches"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h4>Find Matches</h4>
          </NavLink>

          <NavLink
            to="/Matches"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h4>View Matches</h4>
          </NavLink>

          <NavLink
            to="/UserProfile"
            className="text-muted no-underline"
            style={{ textDecorationLine: "none" }}
          >
            <h4>Your Profile</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
