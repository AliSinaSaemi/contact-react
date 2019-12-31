import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer } from '../../context';

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
    dispatch({type: 'ADD_CONTACT', payload: newContact})
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
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter Name ..."
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter email ..."
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input 
                        type="text"
                        name="location"
                        className="form-control form-control-lg"
                        placeholder="Enter Location ..."
                        value={location}
                        onChange={this.onChange}
                      />
                    </div>
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
