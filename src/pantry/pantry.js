import React, { Component } from 'react'
import './Pantry.css'
import Item from './Item/Item'
import ApiContext from '../ApiContext'
import TokenService from '../services/token-service'


export default class Pantry extends Component {

    static contextType = ApiContext
    loginUserId = TokenService.getAuthUserId(this.context.users)
    user = TokenService.getAuthUserName()
    redirectAddItem = () => {
        this.props.history.push('/additem')
    }

    handleDeleteItemRedirect = () => {
        this.props.history.push('/pantry')
      }
    


    userItems = this.context.items.map((item, i) => {
        if (item.usrid !== this.loginUserId || !this.context.users) return null
        return (
            <ul key={i}>
                <li key={i}>
                    <Item redirectToPantry={this.handleDeleteItemRedirect} item={item} usrId={this.loginUserId} key={i} />
                </li>
            </ul>
        )

    })
    render() {
        return (
            <section className='pantry-section page'>
                <h2 className='pantry-user'>{this.user}'s pantry:</h2>
                {this.userItems}
                <button onClick={this.redirectAddItem}>add item</button>
            </section>
        )
    }
}