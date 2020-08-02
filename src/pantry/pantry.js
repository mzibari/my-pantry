import React, { Component } from 'react'
import './Pantry.css'
import Item from './Item/Item'
import ApiContext from '../ApiContext'
import TokenService from '../services/token-service'


export default class Pantry extends Component {

    static contextType = ApiContext
    loginUserId = TokenService.getAuthUserId(this.context.users)
    redirectAddItem = () => {
        this.props.history.push("/additem")
    }
    
    user = TokenService.getAuthUserName(this.context.users)
    
    userItems = this.context.items.map((item, i) => {
        if (item.usrId === this.loginUserId) {
            return (
                <ul key={i}>
                    <li key={i}>
                        <Item item={item} key={i} />
                    </li>
                </ul>
            )
        }
    })
    render() {
        return (
            <section className="pantry-section page">
                {/* {this.user}'s pantry: */}
                {this.userItems}
                <button onClick={this.redirectAddItem}>add item</button>
            </section>
        )
    }
}