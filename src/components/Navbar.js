import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <div>
            <nav className = "navbar navbar-light nav-bar-styling rounded">
                <div className="container">
                    <img src={logo} className="logo"/>
                    <NavLink to="/" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>🐾 Home</h1></NavLink>
                    <NavLink to="/FindMatches" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>Find Matches</h1></NavLink>
                    <NavLink to="/Matches" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>View Matches</h1></NavLink>
                    <NavLink to="/UserProfile" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>Your Profile</h1></NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;
