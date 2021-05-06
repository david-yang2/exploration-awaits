import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/home";
import NavBarContainer from "./nav/navbar_container";
import SignupContainer from "./sessions/signup_container";
import LoginContainer from "./login/login_container";

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component ={Home} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
    </div>
)

export default App;