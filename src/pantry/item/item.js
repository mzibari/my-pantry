import React, { Component } from 'react'
import './Item.css'
import TokenService from '../../services/token-service'
import ApiContext from '../../ApiContext'

export default class Item extends Component {

    static contextType = ApiContext
    render() {
        /* I'm trying to display only user specific items */
        /* console.log(this.props.items.usrId)
        console.log(TokenService.getAuthUserId(this.context.users))
        if (this.props.item.userId === TokenService.getAuthUserId(this.context.users)) { */
            return (
                <div>
                    <span>Item name: {this.props.item.name || {}}</span>
                    <span>Quantity: {this.props.item.quantity || {}}</span>
                    <span>Type: {this.props.item.type || {}}</span>
                    <span>Expiration date: {this.props.item.expiration || {}}</span>
                </div>
            )
        /* }
        else return '' */
    }
}