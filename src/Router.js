import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Header, Access} from "./welcome";
import Home from "./Home";

const AppRouter = () => {
    return (
        <>
            <Header />
            <Router>
                <Route exact path="/" component={Access} />
                <Route exact path="/home" component={Home} />
            </Router>
        </>
    )
}

export default AppRouter;