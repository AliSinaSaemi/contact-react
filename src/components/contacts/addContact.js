import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/textInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    location: '',
    errors: {}
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, location } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (location === '') {
      this.setState({ errors: { location: 'Location is required' } });
      return;
    }
    
    
    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      location: location
    };

    dispatch({type: 'ADD_CONTACT', payload: newContact});
    this.setState({
      name: '',
      email: '',
      location: '',
      errors: {}
    });
  }
  render() {
    const { name, email, location, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="add_contact">
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup 
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter Name ..."
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup 
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email ..."
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup 
                      label="Location"
                      name="location"
                      type="text"
                      placeholder="Enter Location ..."
                      value={location}
                      onChange={this.onChange}
                      error={errors.location}
                    />
                    <input 
                      type="submit" 
                      className="btn btn-block btn-light" 
                      value="Add Contact"
                    />
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
