import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import MatchingContainer from "./MatchingContainer";
import Home from "./Home";
import UserProfile from "./UserProfile";
import MatchesContainer from "./MatchesContainer";

function App() {
  return (
    <div className="background-solid">
      <Navbar />
      <Switch>
        <Route exact path="/Matches">
          <MatchesContainer />
        </Route>
        <Route exact path="/FindMatches">
          <MatchingContainer />
        </Route>
        <Route exact path="/UserProfile">
          <UserProfile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
