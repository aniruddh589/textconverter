import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
        <Link to="" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">TextConverter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            
          </ul> 
        </div>
      </div>
    </nav>
 
    </>
  ) 
}

export default Navbar