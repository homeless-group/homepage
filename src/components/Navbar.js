import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper transparent amber darken-3">
      <div className="container">
        <Link className="brand-logo" to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="responsive-img"/></Link>
        <Link className="sidenav-trigger" to="/" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li><a href='/#social'>Social</a></li>
          <li><a href='/#community'>Community</a></li>
          <li><NavLink to='/activities'>Activities</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><NavLink to='/activities'>Activities</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)