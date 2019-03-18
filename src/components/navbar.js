import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
  

  render() {
    return (

      
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/episode">
                Episode Search
              </NavLink>
            </li>
          </ul>
    
    );
  }
}
export default Navbar;
