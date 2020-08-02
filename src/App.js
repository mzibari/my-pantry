import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm'
import LandingPage from './LandingPage/LandingPage'
import AddItem from './AddItem/AddItem'
import Pantry from './Pantry/Pantry'
import PrivateRoute from './ProtectedRoute/PrivateRoute'
import PublicOnlyRoute from './ProtectedRoute/PublicOnlyRoute'
import ApiContext from './ApiContext'
import store from './dummy-store'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'


class App extends Component {
  state = {
    items: [],
    users: [],
  }

  componentDidMount() {
    this.setState({
      items: [
        ...store.items
      ],
      users: [
        ...store.users
      ]
    })
  }

  //Adding a new item to the state
  handleAddItem = item => {
    if (this.state.items) {
      this.setState({
        items: [
          ...this.state.items,
          item
        ]
      })
    }
    else {
      this.setState({
        items: [
          item
        ]
      })
    }
  }

  //Removing an item for the state
  handleRemoveItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    })
  }

  //Change the quantity of a used item
  handleUseItem = (itemId, usage) => {

  }

  handleAddUser = user => {
    this.setState({
      users: [
        ...this.state.users,
        user
      ]
    })
  }

  render() {
    const value = {
      items: this.state.items,
      users: this.state.users,
      addItem: this.handleAddItem,
      removeItem: this.handleRemoveItem,
      useItem: this.handleUseItem,
      addUser: this.handleAddUser,
    }
    return (
      <ApiContext.Provider value={value}>
        <BrowserRouter>
          <Route component={Nav} />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path='/' component={LandingPage} />
                  <PublicOnlyRoute exact path='/register' component={RegisterForm} />
                  <PublicOnlyRoute exact path='/login' component={LoginForm} />
                  <PrivateRoute exact path='/AddItem' component={AddItem} />
                  <PrivateRoute exact path='/Pantry' component={Pantry} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </BrowserRouter>
      </ApiContext.Provider>
    )
  }
}

export default App;