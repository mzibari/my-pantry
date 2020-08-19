import React, { Component } from 'react'
import './Item.css'
import config from '../../config'
import ApiContext from '../../ApiContext'

export default class Item extends Component {
    static contextType = ApiContext

    handleClickDelete = e => {
        e.preventDefault()
        const itemId = this.props.item.id
        const usrId = this.props.usrId
        fetch(`${config.API_ENDPOINT}/users/${usrId}/items/${itemId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res
            })
            .then(() => {
                this.context.removeItem(itemId)
                this.props.redirectToPantry()
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        return (
            <div className='item'>
                <span className='name'>{this.props.item.item_name || null}</span>
                <span className='quantity'>Quantity: {this.props.item.quantity || null}</span>
                <span className='type'>Type: {this.props.item.item_type || null}</span>
                <span className='exp'>Expiration date: {this.props.item.expiration || null}</span>
                <button
                    className='item__delete'
                    type='button'
                    onClick={this.handleClickDelete}>
                    remove <span className='bin'>&#x1F5D1;</span>
                </button>
            </div>
        )

    }
}