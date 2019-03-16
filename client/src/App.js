import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Nav from './components/Nav';
import Signin from './components/Signin';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Todos from './components/Todo/Todos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path='/' component = {Home} />
          <Route exact path='/signin' component = {Signin} />
          <Route exact path='/login' component = {Login} />
          <Route exact path='/profile' component = {Profile} />
          <Route exact path='/todos' component = {Todos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
