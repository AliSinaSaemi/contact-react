import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: true
  }

  handleDelete = () => {
    this.props.deleteContactHandler();
  }

  
  render() {
    const { name, email, location } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <React.Fragment>
        <div className="card">
          <h5 className="card-title">{ name } 
          <i onClick={() => {this.setState({showContactInfo: !this.state.showContactInfo})}} className="fas fa-caret-down" style={{ cursor: 'pointer' }}></i>
          <i onClick={this.handleDelete} className="fa fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i></h5>
          { showContactInfo ? (
            <div className="card-body">
              <p className="card-text">Email: { email }</p>
              <p className="card-text">Location: { location }</p>
            </div>) : null}
        </div>
      </React.Fragment>
    )
  }
}

export default Contact;