import "./App.css";
import React from "react";
import {Route, Switch} from "react-router-dom"

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
