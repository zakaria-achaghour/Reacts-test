import React, { Component } from 'react'
import Contact from './Contact'
 class Contacts extends Component {
     state = {
         contacts: [
             {id: 1, name: "Z", tel: "06123", email:"z@gmail.com"},
             {id: 2, name: "A", tel: "064789", email:"a@gmail.com"},
             {id: 3, name: "B", tel: "056887", email:"b@gmail.com"}
         ]
     }

     deleteContact(id){
        const {contacts} = this.state
        const newListContacts = contacts.filter((contact) => contact.id !== id)
        this.setState({
            contacts : newListContacts
        })
     }
    render() {
        const { contacts } = this.state
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact key={contact.id} data={contact} deleteContactChild={this.deleteContact.bind(this,contact.id)} />
                ))}
            </div>
        )
    }
}

export default Contacts