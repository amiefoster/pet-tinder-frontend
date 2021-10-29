import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"




function Navbar() {
    return (
        <div>
            <nav className = "navbar navbar-light nav-bar-styling rounded">
                <div className="container">
                    <img src={logo} className="logo"/>
                    <NavLink to="/" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Home</NavLink>
                    <NavLink to="/FindMatches" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Find Matches</NavLink>
                    <NavLink to="/Matches" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Your Matches</NavLink>
                    <NavLink to="/UserProfile" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Your Profile</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
