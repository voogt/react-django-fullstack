import React, {Component, Fragment} from "react";
import ReactDom from "react-dom";
import Header from './layout/Header'
import Dashboard from "./leads/Dashboard";

class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));