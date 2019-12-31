import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);
    
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.locationInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      location: this.locationInput.current.value
    };
    console.log(contact);
  }

  static defaultProps = {
    name: 'Ali Saemi',
    email: "alisina@gmail.com",
    location: 'Tehran'
  }
  render() {
    const { name, email, location } = this.props;
    return (
      <div className="add_contact">
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name ..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email ..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                  type="text"
                  name="location"
                  className="form-control form-control-lg"
                  placeholder="Enter Location ..."
                  defaultValue={location}
                  ref={this.locationInput}
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

export default AddContact;
