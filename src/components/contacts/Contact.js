import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from '../context'
import './contact.css'
import axios from 'axios'

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
     onDeleteClick = async (id,dispatch) =>{

        try{
            const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)

            dispatch({ 
                type: 'DELETE_CONTACT', 
                payload: id })
        }catch(e) {
            console.log(e)
        }
    
     }
    render() {
        const { id ,name , phone , email } = this.props.data;

        return (
            <Consumer>
                {value =>{

                    const { dispatch } = value;
                    return(
                    <div className="card">
                                    
                    <div className="card-body">
                    <h4 className="card-title">
                        {name}
                        <i style={{cursor: 'pointer'}} onClick={this.showContact.bind(this,'zakaria')} className="fa fa-sort-down"></i>



                        <Link to={`/contact/edit/${id}`}>
                            <i style={{ color: 'orange',float: 'right', cursor: 'pointer'}} className="fa fa-pencil ml-1" ></i>
                        </Link>



                        <i style={{ color: 'red',float: 'right', cursor: 'pointer'}}
                                className="fa fa-times" aria-hidden="true"
                            onClick={this.onDeleteClick.bind(this, id, dispatch )}></i>
                        </h4>
                        {(this.state.showContactToggle) ? (
                        <div className="card-text">
                            <ul className="list-group">
                                
                                <li className="list-group-item">{phone}</li>
                                <li className="list-group-item">{email}</li>

                            </ul>
                        </div>
                        ) : null}

                    </div>
                    </div>
                    ) 
                    }
                }
                 
            </Consumer>
        )
       
    }
}

Contact.defaultProps = {
    name: " my name",
    phone: "06 000 000",
    email: "user@email.com"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    // deleteContactChild: PropTypes.func.isRequired
   
   
}
/*
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string,
    email: PropTypes.string
   
}*/

export default Contact;