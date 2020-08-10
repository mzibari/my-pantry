import React, { Component } from 'react'
import './Item.css'
import ApiContext from '../../ApiContext'

export default class Item extends Component {

    static contextType = ApiContext
    render() {
            return (
                <div className="item">
                    <span className="name">{this.props.item.item_name || {}}</span>
                    <span className="quantity">Quantity: {this.props.item.quantity || {}}</span>
                    <span className="type">Type: {this.props.item.item_type || {}}</span>
                    <span className="exp">Expiration date: {this.props.item.expiration || {}}</span>
                </div>
            )
        
    }
}