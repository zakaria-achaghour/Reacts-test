import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './navbar.css'

 const NavBar = (props) => {
    const {title} = props;
    return (
       
            
            <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
                <a className="navbar-brand" href="/">{ title }</a>
              
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">List Contact <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/add">Add Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                    </ul>
                    
            
            </nav>
       
    )
}

NavBar.defaultProps = {
    title: "App"
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired
}
export default NavBar;