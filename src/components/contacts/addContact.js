import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/textInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    location: ''
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, location } = this.state;
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
      location: ''
    });
  }
  render() {
    const { name, email, location } = this.state;
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
                    />
                    <TextInputGroup 
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email ..."
                      value={email}
                      onChange={this.onChange}
                    />
                    <TextInputGroup 
                      label="Location"
                      name="location"
                      type="text"
                      placeholder="Enter Location ..."
                      value={location}
                      onChange={this.onChange}
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
