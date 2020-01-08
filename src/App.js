import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Page from './components/Active_link';
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
              <Route
                  exact
                  path="/"
                  render={props => (
                    <Page {...props} component={Contacts} title="Contacts" />
                )}
              />
              <Route
                  exact
                  path="/about"
                  render={props => (
                    <Page {...props} component={About} title="Ab" />
                )}
              />
              <Route
                  exact
                  path="/contact/add"
                  render={props => (
                    <Page {...props} component={AddContact} title="Add to contacts" />
                )}
              />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;