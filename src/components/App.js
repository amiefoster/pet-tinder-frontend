import React from "react";
import {Route, Switch} from "react-router-dom"
import Navbar from "./Navbar";
import MatchingContainer from "./MatchingContainer";
import Matches from "./Matches";
import Home from "./Home"
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/Matches">
          <Matches/>
        </Route>
        <Route exact path="/FindMatches">
          <MatchingContainer/>
        </Route>
        <Route exact path="/UserProfile">
          <UserProfile/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
