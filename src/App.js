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

class App extends Component {
  state = {
    items: [],
  }

  //Adding a new item to the state
  handleAddItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
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

  render() {
    const value = {
      notes: this.state.items,
      addItem: this.handleAddItem,
      removeItem: this.handleRemoveItem,
      useItem: this.handleUseItem,
    }
    return (
      <ApiContext.Provider value={value}>
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
      </ApiContext.Provider>
    )
  }
}

export default App;