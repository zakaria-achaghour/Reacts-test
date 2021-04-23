import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

 const NavBar = (props) => {
    const {title} = props;
    return (
        <div>
            
            <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
                <a className="navbar-brand" href="#">{ title }</a>
              
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        
                    </ul>
                    
            
            </nav>
        </div>
    )
}

NavBar.defaultProps = {
    title: "App"
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired
}
export default NavBar;