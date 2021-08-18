import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import Profile from "./Components/Pages/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </>
  );
}

export default App;
