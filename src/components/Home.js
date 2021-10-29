function Home() {
  return (
    <div className="home-background">
      <div className="center-title">
        <div className="center-image">
          <h1 className="landing-page-font"
            style={{
              fontSize: "7.62vw",
              color: "#ef266a",
              // textShadow: "1px 1px 1px #000",             
              margin: "0",
              textAlign: "center",
            }}>
            SWIPE RIGHT
          </h1>
          <div></div>
          <br />
          <a href="/FindMatches">
            <button
              type="button"
              id="center-title-button"
              class="btn-lg btn-danger"
            >
              Find Your Match
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
