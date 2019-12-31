import React, { Component } from 'react';
import Contact from './contact';

class Contacts extends Component {
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
  removeContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  }
  render() {
    const { contacts } = this.state;
    return (
      <div className="contacts">
        {contacts.map(contact => (
          <Contact 
            key={ contact.id }
            contact={ contact }
            deleteContactHandler={this.removeContact.bind(this, contact.id)}
          />
        ))}
      </div>
    )
  }
}



export default Contacts;
