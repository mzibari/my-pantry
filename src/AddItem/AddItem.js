import React, { Component } from 'react'
import './AddItem.css'
import ApiContext from '../ApiContext'

export default class AddItem extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSubmit = event => {
        event.preventDefault()
        const item = {
            id: this.context.items.length + 1,
            name: event.target['item-name'].value,
            quantity: event.target['quantity'].value,
            type: event.target['item-type'].value,
            expiration: event.target['exp-day'].value,
        }
        this.context.addItem(item)
        this.props.history.push('/pantry')
    }

    static contextType = ApiContext
    render() {
        return (
            <section className="add-item-section">
                <h3>Add Item</h3>
                <form id="Add Item" onSubmit={this.handleSubmit}>
                    <label htmlFor="item-name">Item name</label>
                    <input type="text" name="item-name" required />

                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" required />

                    <label htmlFor="exp-day">Expiration date</label>
                    <input type="text" name="exp-day" required />
                    <span>Item type</span>
                    <div>
                        <input type="radio" name="item-type" defaultValue={"Canned goods"} className="item-type-radio" />
                        <label htmlFor="item-type">Canned goods</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={"Frozen"} className="item-type-radio" />
                        <label htmlFor="item-type">Frozen</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={"Produce"} className="item-type-radio" />
                        <label htmlFor="item-type">Produce</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={"Spices"} className="item-type-radio" />
                        <label htmlFor="item-type">Spices</label>
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