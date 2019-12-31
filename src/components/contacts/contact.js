import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: true
  }

  handleDelete = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  }

  
  render() {
    const { name, email, location, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card">
                <h5 className="card-title">{ name } 
                <i onClick={() => {this.setState({showContactInfo: !this.state.showContactInfo})}} className="fas fa-caret-down" style={{ cursor: 'pointer' }}></i>
                <i onClick={this.handleDelete.bind(this, id, dispatch)} className="fa fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i></h5>
                { showContactInfo ? (
                  <div className="card-body">
                    <p className="card-text">Email: { email }</p>
                    <p className="card-text">Location: { location }</p>
                  </div>) : null}
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contact;