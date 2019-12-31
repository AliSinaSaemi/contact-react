import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './contact';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>{contacts.map(contact => (
              <Contact 
                key={ contact.id }
                contact={contact}
              />
            ))}</div>
          )
        }}
      </Consumer>
    )
  }
}


export default Contacts;