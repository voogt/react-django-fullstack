import React, {Component} from "react";
import { Link } from "react-router-dom";

export class Register extends Component{

    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    onSubmit = e => {
        e.preventDefault();
        
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render(){
        const {username, email, password, password2} = this.state
        return(
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-4 mb-4">
                    <h1>Register</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" name="username" onChange={this.onChange} value={username}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" onChange={this.onChange} value={email}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" name="message" onChange={this.onChange} value={password}/>
                        </div>

                        <div className="form-group">
                            <label>Password Confirm</label>
                            <input className="form-control" type="password" name="message" onChange={this.onChange} value={password2}/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                        <p>Already have an account? <Link to="/login">Login</Link></p>

                    </form>
                </div>
            </div>
        )
    }
}

export default Register