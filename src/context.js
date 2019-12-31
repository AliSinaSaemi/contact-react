import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case "DELETE_CONTACT":
      return {
        ...state, 
        contacts: state.contacts.filter(contact => contact.id !== action.payload) 
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Ali Saemi",
        email: "alisaemi@gmail.com",
        location: "Tehran"
      },
      {
        id: 2,
        name: "Jack Parul",
        email: "jackparul@gmail.com",
        location: "NY"
      },
      {
        id: 3,
        name: "Sara Conner",
        email: "sara_conner@gmail.com",
        location: "Future"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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