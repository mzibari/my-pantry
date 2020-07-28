import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm'
import LandingPage from './LandingPage/LandingPage'
import AddItem from './AddItem/AddItem'
import Pantry from './Pantry/Pantry'
import ApiContext from './ApiContext'
import store from './dummy-store'

class App extends Component {
  state = {
    items: [],
    users: [],
  }

  componentDidMount() {
    this.setState ({
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
    console.log(item)
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
    console.log(this.state.items)
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
      users:[
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
          <Switch>
            <Route path='/nav' component={Nav} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/AddItem' component={AddItem} />
            <Route path='/Pantry' component={Pantry} />
            <Route path='/' component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </ApiContext.Provider>
    )
  }
}

export default App;