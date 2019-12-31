import React, { Component, createContext } from 'react';

const Context = React.createContext();

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
    ]
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