import {NavLink} from "react-router-dom"




function Navbar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/FindMatches">Find Matches</NavLink>
            <NavLink to="/Matches">Your Matches</NavLink>
            <NavLink to="/UserProfile">Your Profile</NavLink>
        </div>
    )
}

export default Navbar;
