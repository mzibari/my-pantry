import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm'
import LandingPage from './LandingPage/LandingPage'
import AddItem from './AddItem/AddItem'
import Pantry from './Pantry/Pantry'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
         <Switch>
          <Route path='/nav' component={Nav} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/LandingPage' component={LandingPage} />
          <Route path='/AddItem' component={AddItem} />
          <Route path='/Pantry' component={Pantry} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;