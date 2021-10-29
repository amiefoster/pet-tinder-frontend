
function Navbar() {
    return (
        <div>
            <nav className = "navbar navbar-light nav-bar-styling rounded">
                <div className="container">
                    <NavLink to="/" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>🐾 Dander</h1></NavLink>
                    <NavLink to="/FindMatches" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>Find Matches</h1></NavLink>
                    <NavLink to="/Matches" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>View Matches</h1></NavLink>
                    <NavLink to="/UserProfile" className="text-muted no-underline" style={{textDecorationLine: "none" }}><h1>Your Profile</h1></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
