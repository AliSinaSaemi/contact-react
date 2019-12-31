import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    displayInfo: true
  }

  handleDelete = () => {
    this.props.deleteContactHandler();
  }
  render() {
    const { name, location, email } = this.props.contact;
    const { displayInfo } = this.state;
    return (
      <div className="card">
        <h5 className="card-title">{ name } 
          <i onClick={ () => {this.setState({ displayInfo: !this.state.displayInfo })} } className="fas fa-caret-down" style={{ cursor: 'pointer' }}></i>
          <i onClick={this.handleDelete} className="fa fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i>
        </h5>
        { displayInfo ? (
          <div className="card-body">
            <p className="card-text">Email: { email }</p>
            <p className="card-text">Location: { location }</p>
          </div>
        ) : null }
      </div>
    )
  }
}



export default Contact;