
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Roles from "./Roless"; 
import "./Dashboard.css"; 
import { Login } from "../Login";
import { LoginState } from "./Interface";
import { HomePage } from "./HomePage";

class Dashboard extends React.Component <{}, LoginState>{
  constructor(props: {}) {
    super(props);
    this.state = {
        isLoggedIn: false 
    };
}


  Login=()=>{
      this.setState({isLoggedIn:true})
  }
  render() {
    if (this.state.isLoggedIn) {
      return <Login />;
  }

  

   

    return (
      <div>
        <Router>
          <header className="header">
            <div className="logo"></div>
            <nav>
              <ul className="nav-links">
                <li>
                  <Link onClick={this.HomePage} to="/">Home</Link>
                </li>
                <li>
                  <Link to="/freshers-roles">Freshers Roles</Link>
                </li>
                
              </ul>
            </nav>
            <button type="button" onClick={this.Login} className="btn btn-secondary " data-mdb-ripple-init>Logout</button>

          </header>
          <Routes>
            <Route  path="/" element={<HomePage/>} />
            <Route path="/freshers-roles" element={<Roles />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Dashboard;