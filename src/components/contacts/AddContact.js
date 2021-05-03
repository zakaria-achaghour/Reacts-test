import React, { Component } from 'react'
import { Consumer } from '../context'
import InputTextGroup from '../helpers/InputTextGroup.js'
 class AddContact extends Component {
     state= {
         name: '',
         phone: '',
         email: ''
        
        }
        onChangeInput = (e) =>this.setState({[e.target.name]: e.target.value})

        submit = ( dispatch, size , e )=> {
            e.preventDefault();
            dispatch({
                type: 'ADD_CONTACT',
                payload: {
                    id: size + 1,
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,

                }
            })
            this.setState({
                name: '',
                phone: '',
                email: ''
            })
        }

    render() {
        const { name , phone , email } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                          <div className="container mb-5">
                            <form  onSubmit={this.submit.bind(this,dispatch , value.contacts.length)}>
                            <div className="card">
                            <div className="card-body">
                                
                                  
                                           <InputTextGroup label="Name" type="text" name="name" value={name} onChange={this.onChangeInput}/>
                                          
                                               
                                           <InputTextGroup label="Phone" type="text" name="phone" value={phone} onChange={this.onChangeInput}/>

                                          
                                           <InputTextGroup label="Email" type="email" name="email" value={email} onChange={this.onChangeInput}/>
                                            
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-success btn-block">Add</button>
                                            </div>    
                                     
                                    
                                </div>
                            </div>
                            </form>
                        </div>
               )  }}
            </Consumer>
        )
   
    }
}
export default  AddContact