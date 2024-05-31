import React from "react";
import "./Components/Login.css";
import Dashboard from "./Components/Dashboard";
import { LoginState } from "./Components/Interface";



export class Login extends React.Component<{}, LoginState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false 
        };
    }

    submit = () => {
        this.setState({ isLoggedIn: true });
    }
    
    render() {
        if (this.state.isLoggedIn) {
            return <Dashboard />;
        }

        return (
            <div className="Auth-form-container" >
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={this.submit} type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}
