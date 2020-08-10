import React, { Component } from 'react'
import './AddItem.css'
import ApiContext from '../ApiContext'
import store from '../dummy-store'
import TokenService from '../services/token-service'

export default class AddItem extends Component {

    handleSubmit = event => {
        event.preventDefault()
        const item = {
            item_name: event.target['item-name'].value,
            quantity: event.target['quantity'].value,
            item_type: event.target['item-type'].value,
            expiration: event.target['exp-day'].value,
            usrid: TokenService.getAuthUserId(store.users)
        }
        this.context.addItem(item)
        this.props.history.push('/pantry')
    }

    static contextType = ApiContext
    render() {
        return (
            <section className="add-item-section page">
                <h3>Add Item</h3>
                <form id="Add Item" onSubmit={this.handleSubmit}>

                    <input type="text" className="add-item-input" name="item-name" placeholder="item name" required />

                    <input type="text" className="add-item-input" name="quantity" placeholder="quantity" required />

                    <input type="text" className="add-item-input" name="exp-day" placeholder="expiration date" required />

                    <div className="item-type">
                        <span>Item type</span>
                        <div>
                            <label htmlFor="item-type">
                            <input type="radio" name="item-type" defaultValue={"Canned goods"} className="item-type-radio" />
                            Canned goods</label>
                        </div>
                        <div>
                            <label htmlFor="item-type">
                            <input type="radio" name="item-type" defaultValue={"Frozen"} className="item-type-radio" />
                            Frozen</label>
                        </div>
                        <div>
                            <label htmlFor="item-type">
                            <input type="radio" name="item-type" defaultValue={"Produce"} className="item-type-radio" />
                            Produce</label>
                        </div>
                        <div>
                            <label htmlFor="item-type">
                            <input type="radio" name="item-type" defaultValue={"Spices"} className="item-type-radio" />
                            Spices</label>
                        </div>
                    </div>

                    <div>
                        <button type="submit">Add item</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </section>
        )
    }
}