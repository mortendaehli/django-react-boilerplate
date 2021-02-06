import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import { ToastContainer } from "react-toastify";

import Root from "./Root";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
    render() {
        return (
            <div>
                <Root> {/* replace BrowserRouter with Root */}
                <ToastContainer hideProgressBar={true} newestOnTop={true} />
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route exact path="/" component={Home} />
                        <Route path="*">Ups</Route>
                    </Switch>
                </Root> {/* replace BrowserRouter with Root */}
            </div>
        );
    }
}

export default App;