import React, {Component, Fragment} from "react";
import ReactDom from "react-dom";
import Header from './layout/Header'
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import Alerts from "./layout/Alerts";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

// Alert Options

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {

    componentDidMount(){
        store.dispatch(loadUser());
    }

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Routes>
                                <Route element={<PrivateRoute/>}>
                                    <Route path="/" element={<Dashboard/>} exact/>
                                </Route>
                                <Route path="/login" element={<Login/>} exact/>
                                <Route path="/register" element={<Register/>} exact/>
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));