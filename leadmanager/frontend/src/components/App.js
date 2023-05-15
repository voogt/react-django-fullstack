import React, {Component, Fragment} from "react";
import ReactDom from "react-dom";
import Header from './layout/Header'
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import Alerts from "./layout/Alerts";
import {HashRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Login from "./accounts/Login";
import Register from "./accounts/Register";

// Alert Options

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Routes>
                                <Route  path="/" element={<Dashboard/>}/>
                                <Route  path="/login" element={<Login/>}/>
                                <Route  path="/register" element={<Register/>}/>
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));