import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './contact';

class Contacts extends Component {

  render() {
    return (
      <React.Fragment>
      <h1 className="text-center">Contacts <span className="text-danger">List</span></h1>
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
      </React.Fragment>
    )
  }
}


export default Contacts;