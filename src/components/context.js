import React, { Component } from 'react'

const Context = React.createContext();
const reducer = (state , action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
         case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        default: 
            return state;
    }
}
export  class Provider extends Component {
    state = {
        contacts: [
            {id: 1, name: "Z", phone: "06123", email:"z@gmail.com"},
            {id: 2, name: "A", phone: "064789", email:"a@gmail.com"},
            {id: 3, name: "B", phone: "056887", email:"b@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state , action))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
