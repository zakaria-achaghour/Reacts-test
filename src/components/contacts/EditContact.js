import React, { Component } from 'react'
import { Consumer } from '../context'
import InputTextGroup from '../helpers/InputTextGroup.js'
import axios from 'axios'

 class EditContact extends Component {
     state= {
         name: '',
         phone: '',
         email: '',
         erros: {}
        
        }

        async componentDidMount(){
            const id = this.props.match.params.id
          const res = await  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          this.setState({
              name:res.data.name,
              phone:res.data.phone,
              email:res.data.email,

          })
        }
        onChangeInput = (e) =>this.setState({[e.target.name]: e.target.value})

        submit = async( dispatch, size , e )=> {
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
           const updateContact = { name: name,phone: phone, email: email,}
           const id = this.props.match.params.id

           try {
                    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact)

                        dispatch({
                                type: 'UPDATE_CONTACT',
                                payload: res.data
                                })
             }catch(e) {
                 console.log(e)
             }
            

            
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
                                <h4>Edit Contact</h4>
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
                                                <button type="submit" className="btn btn-danger btn-block">Update</button>
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
export default  EditContact
