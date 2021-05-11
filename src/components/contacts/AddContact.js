import React, { Component } from 'react'
import { Consumer } from '../context'
import InputTextGroup from '../helpers/InputTextGroup.js'
 class AddContact extends Component {
     state= {
         name: '',
         phone: '',
         email: '',
         erros: {}
        
        }
        onChangeInput = (e) =>this.setState({[e.target.name]: e.target.value})

        submit = ( dispatch, size , e )=> {
            e.preventDefault();
            const {name ,email ,phone} = this.state
            if(name === ""){
                this.setState({erros: {name:'the name is required!'}})
                return;
            }
            if(phone === ""){
                this.setState({erros: {phone:'the phone is required!'}})
                return;

            }
            if(email === ""){
                this.setState({erros: {email:'the email is required!'}})
                return;

            }
           
            dispatch({
                type: 'ADD_CONTACT',
                payload: {
                    id: size + 1,
                    name: name,
                    phone: phone,
                    email: email,

                }
            })
            this.setState({
                name: '',
                phone: '',
                email: '',
                errors:{}
            })
            this.props.history.push('/')
        }

    render() {
        const { name , phone , email ,erros } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                          <div className="container mb-5">
                            <form  onSubmit={this.submit.bind(this,dispatch , value.contacts.length)}>
                            <div className="card">
                            <div className="card-body">
                                
                                  
                                           <InputTextGroup label="Name" type="text" 
                                                           name="name" value={name} 
                                                           onChange={this.onChangeInput}
                                                           error={erros.name}/>
                                          
                                               
                                           <InputTextGroup label="Phone" type="text" 
                                                            name="phone" value={phone}
                                                            onChange={this.onChangeInput}
                                                            error={erros.phone}/>

                                          
                                           <InputTextGroup label="Email" type="email" 
                                                           name="email" value={email}
                                                            onChange={this.onChangeInput}
                                                            error={erros.email}/>
                                            
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