import React, { Component } from 'react'
import './AddItem.css'
import ApiContext from '../ApiContext'
import TokenService from '../services/token-service'
import xss from 'xss'

export default class AddItem extends Component {
    // Using state to get new item fields
    state = {
        item_name: {},
        quantity: {},
        item_type: {},
        expiration: {},
    }

    handleChangeItemName = e => this.setState({ item_name: e.target.value })
    handleChangeQuantity = e => this.setState({ quantity: e.target.value })
    handleChangeItemType = e => this.setState({ item_type: e.target.value })
    handleChangeExpiration = e => this.setState({ expiration: e.target.value })

    handleSubmit = event => {
        event.preventDefault()
        const usrid = TokenService.getAuthUserId(this.context.users)
        const item = {
            item_name: xss(this.state.item_name),
            quantity: xss(this.state.quantity),
            item_type: xss(this.state.item_type),
            expiration: xss(this.state.expiration),
        }
        this.context.addItem(item, usrid)
        this.props.history.push('/pantry')
    }

    static contextType = ApiContext
    render() {
        return (
            <section className='add-item-section page'>
                <h2>Add Item</h2>
                <form id='Add Item' onSubmit={this.handleSubmit}>

                    <input onChange={this.handleChangeItemName} type='text' className='add-item-input' name='item-name' placeholder='item name' required />

                    <input onChange={this.handleChangeQuantity} type='number' className='add-item-input' name='quantity' placeholder='quantity' required />

                    <input onChange={this.handleChangeExpiration} type='date' className='add-item-input' name='exp-day' placeholder='exp mmm-dd-yyyy' required />

                    <div className='item-type'>
                        <span>Item type</span>
                        <div>
                            {/* The value for the radios is set to 1 through 4 to corelate with the item_type id in the server */}
                            <label htmlFor='item-type'>
                                <input onChange={this.handleChangeItemType} type='radio' name='item-type' className='item-type-radio' value='1' />
                            Canned goods</label>
                        </div>
                        <div>
                            <label htmlFor='item-type'>
                                <input onChange={this.handleChangeItemType} type='radio' name='item-type' className='item-type-radio' value='2' />
                            Frozen</label>
                        </div>
                        <div>
                            <label htmlFor='item-type'>
                                <input onChange={this.handleChangeItemType} type='radio' name='item-type' className='item-type-radio' value='3' />
                            Produce</label>
                        </div>
                        <div>
                            <label htmlFor='item-type'>
                                <input onChange={this.handleChangeItemType} type='radio' name='item-type' className='item-type-radio' value='4' />
                            Spices</label>
                        </div>
                        <span className='error' id='error'></span>
                    </div>

                    <div>
                        <button type='submit'>Add item</button>
                        <button type='reset'>Reset</button>
                    </div>
                </form>
            </section>
        )
    }
}