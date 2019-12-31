import React, { Component } from 'react'

class addContact extends Component {
  state = {
    name: '',
    email: '',
    location: ''
  };
  render() {
    return (
      <div className="add_contact">
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name ..."
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input 
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email ..."
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Name</label>
                <input 
                  type="text"
                  name="location"
                  className="form-control form-control-lg"
                  placeholder="Enter Location ..."
                  value={location}
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
  }
}

export default addContact;
