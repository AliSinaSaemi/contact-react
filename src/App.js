import React, { Component } from 'react';
import Contacts from './components/contacts/contacts';
import Header from './components/layout/header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="app">
          <Header subject="Header" />
          <div className="container">
            <h2 className="text-center">Contacts</h2>
            <Contacts />
          </div>
        </div>
      </Provider>

    )
  }
}

export default App;