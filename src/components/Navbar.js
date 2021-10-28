import {NavLink} from "react-router-dom"




function Navbar() {
    return (
        <div>
            <nav className = "navbar navbar-light nav-bar-styling rounded">
                <div className="container">
                    <NavLink to="/" className="text-muted no-underline" style={{textDecorationLine: "none" }}>🐾 Dander</NavLink>
                    <NavLink to="/FindMatches" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Find Matches</NavLink>
                    <NavLink to="/Matches" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Your Matches</NavLink>
                    <NavLink to="/UserProfile" className="text-muted no-underline" style={{textDecorationLine: "none" }}>Your Profile</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
