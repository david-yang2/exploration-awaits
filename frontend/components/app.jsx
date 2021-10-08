import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/home";
import NavBarContainer from "./nav/navbar_container";
import SignupContainer from "./sessions/signup_container";
import LoginContainer from "./login/login_container";
import CarlistingsIndexContainer from "./carlistings/carlistings_index_container";
import CarlistingShowContainer from "./carlistings/carlisting_show_container";
import BookingsContainer from "./bookings/bookings_container"
import {AuthRoute, ProtectedRoute} from "../util/route_api_util"

const App = () => (
    <div className='app'>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component ={Home} />
        <Route path="/rigs" component ={CarlistingsIndexContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route exact path="/carlistings/:id" component={CarlistingShowContainer} />
        <ProtectedRoute exact path="/bookings/:id" component={BookingsContainer} />
    </div>
)

export default App;