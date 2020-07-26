import React, { Component } from 'react'
import './Item.css'


export default class Item extends Component {
    render() {
        return (
            <div>
                <span>Item name: {this.props.item.name || {}}</span>
                <span>Quantity: {this.props.item.quantity || {}}</span>
                <span>Type: {this.props.item.type || {}}</span>
                <span>Expiration date: {this.props.item.expiration || {}}</span>
            </div>
        )
    }
}