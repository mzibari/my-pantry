import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import {  Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm'
import LandingPage from './LandingPage/LandingPage'
import AddItem from './AddItem/AddItem'
import Pantry from './Pantry/Pantry'
import PrivateRoute from './ProtectedRoute/PrivateRoute'
import PublicOnlyRoute from './ProtectedRoute/PublicOnlyRoute'
import ApiContext from './ApiContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import config from './config'
import './App.css'


class App extends Component {
  state = {
    items: [],
    users: [],
    itemType: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/users`),
      fetch(`${config.API_ENDPOINT}/items`),
      fetch(`${config.API_ENDPOINT}/itemtype`)
    ])
      .then(([usersRes, itemsRes, itemTypeRes]) => {
        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e))
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e))
        if (!itemTypeRes.ok)
          return itemTypeRes.json().then(e => Promise.reject(e))

        return Promise.all([
          usersRes.json(),
          itemsRes.json(),
          itemTypeRes.json(),
        ])
      })
      .then(([users, items, itemType]) => {
        this.setState({ users, items, itemType })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  //Adding a new item to the state
  handleAddItem = (item, usrid) => {
    fetch(`${config.API_ENDPOINT}/users/${usrid}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(item => {
        this.setState({
          items: [
            ...this.state.items,
            item
          ]
        })
      })
      .catch(error => {
        console.error({ error })
      })
    /* if (this.state.items[0].usrId) {
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
    } */
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
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(user => {
        this.setState({
          users: [
            ...this.state.users,
            user
          ]
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const value = {
      items: this.state.items,
      users: this.state.users,
      itemType: this.state.itemTypes,
      addItem: this.handleAddItem,
      removeItem: this.handleRemoveItem,
      useItem: this.handleUseItem,
      addUser: this.handleAddUser,
    }
    return (
      <ApiContext.Provider value={value}>
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
      </ApiContext.Provider>
    )
  }
}

export default App;