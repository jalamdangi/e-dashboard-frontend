import React, { useReducer } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const Navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logeOut = () => {
    localStorage.clear();
    Navigate('/signup');

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <NavLink className="navbar-brand text-white" to="/">Dashboard : {auth ? 'welcome ' + JSON.parse(auth).name : ""}</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {auth ? 
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-light" to="/">Product<span className="sr-only">(current)</span></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/addproduct">Add Product</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/advancetopics">Advance</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/profile">Profile</NavLink></li>
            <li><NavLink className="nav-link text-light" to="/signup" onClick={logeOut}>Logout</NavLink></li>
          </ul>:
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-light" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/signup">Sign Up</NavLink></li>
          </ul>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar