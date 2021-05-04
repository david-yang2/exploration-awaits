import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/home";

const App = () => (
    <div>
        <Route path="/" component ={Home} />

    </div>
)

export default App;