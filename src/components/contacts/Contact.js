import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './contact.css'

 class Contact extends Component {
    render() {
        const { name , tel , email } = this.props;

        return (
            <div>
                <div className="card text-left">
                 
                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                        <ul className="list-group">
                            
                            <li className="list-group-item">{tel}</li>
                            <li className="list-group-item">{email}</li>

                        </ul>
                    </p>
                  </div>
                </div>
              
            </div>
        )
    }
}

Contact.defaultProps = {
    name: " my name",
    tel: "06 000 000",
    email: "user@email.com"
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string,
    email: PropTypes.string
   
}

export default Contact;