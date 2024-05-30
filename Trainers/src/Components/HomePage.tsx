import React from "react";
import "../Components/HomePage.css";
import Roles from "./Roless";

export class HomePage extends React.Component {
  constructor(props:any) {
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
      return <Roles />;
    } else {
      return (
        <div className="Homepage">
          <div className="caption ps-4">
            Empower <br />Trainee's Journey
          </div>
          <button className="startNow border w-25 ms-4" onClick={this.Login}>start now</button>
        </div>
      );
    }
  }
}
