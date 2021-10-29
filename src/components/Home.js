function Home() {
    


    return (
        
        <div className="home-page">
            <h1 style={{fontSize: "8vw", color: "#ef266a", textShadow: "2px 2px 5px red", margin: "0", textAlign: "center" }}>SWIPE RIGHT
            </h1>
            {/* <p>sample text</p> */}
            <div>
                <h3>Find your Match!</h3>
            </div>
            <a href="/FindMatches">
                <button id="linkToMatchingBttn">Start Matching</button>
            </a>

        </div>
        )
}

export default Home;
