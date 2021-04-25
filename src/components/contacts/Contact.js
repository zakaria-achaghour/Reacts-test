import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './contact.css'

 class Contact extends Component {
     state ={
         showContactToggle: false
     }
     showContact(message){
         console.log('show',message)
         this.setState({
            showContactToggle: !this.state.showContactToggle
         });
     }
     onDeleteClick=() =>{
         console.log('delete');
         this.props.deleteContactChild()
     }
    render() {
        const { name , tel , email } = this.props.data;

        return (
           
                <div className="card">
                 
                  <div className="card-body">
                    <h4 className="card-title">
                        {name}
                        <i style={{cursor: 'pointer'}} onClick={this.showContact.bind(this,'zakaria')} className="fa fa-sort-down"></i>
                        <i style={{ color: 'red',float: 'right', cursor: 'pointer'}}
                             className="fa fa-times" aria-hidden="true"
                            onClick={this.onDeleteClick}></i>
                        </h4>
                        {(this.state.showContactToggle) ? (
                        <div className="card-text">
                            <ul className="list-group">
                                
                                <li className="list-group-item">{tel}</li>
                                <li className="list-group-item">{email}</li>

                            </ul>
                        </div>
                        ) : null}
                 
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
    data: PropTypes.object.isRequired,
    deleteContactChild: PropTypes.func.isRequired
   
   
}
/*
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string,
    email: PropTypes.string
   
}*/

export default Contact;