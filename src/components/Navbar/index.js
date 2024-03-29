import React from 'react';
import { Link } from 'react-router-dom';
const Navbar  = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">QH</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/images">All Images</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">Favourites</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={props.logout}>Logout</a>
        </li>
      </ul>
    </div>
  </nav>

}
export default Navbar;