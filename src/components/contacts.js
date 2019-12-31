import React, { Component } from 'react';
import { Consumer } from '../context';
import Contact from './contact';

class Contacts extends Component {


  removeContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  }

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
                deleteContactHandler={this.removeContact.bind(this, contact.id)}
              />
            ))}</div>
          )
        }}
      </Consumer>
    )
  }
}


export default Contacts;