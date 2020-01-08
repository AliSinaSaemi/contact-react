import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contacts from './components/contacts/contacts';
import Header from './components/layout/header';
import AddContact from './components/contacts/addContact';
import About from './components/pages/about';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="app">
            <Header subject="Header" />
            <div className="container">
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;