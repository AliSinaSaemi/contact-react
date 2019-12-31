import React, { Component } from 'react';
import Header from './components/header';
import Contacts from './components/contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header branding="Contacts" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    )
  }
}

export default App;
