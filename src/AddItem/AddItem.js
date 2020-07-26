import React, { Component } from 'react'
import './AddItem.css'

export default class AddItem extends Component {
    render() {
        return (
            <section>
                <h3>Add Item</h3>
                <form id="Add Item">
                    <label htmlFor="item-name">Item name</label>
                    <input type="text" name="item-name" required />
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" required />
                    <label htmlFor="exp-day">Expiration date</label>
                    <input type="text" name="exp-day" required />
                    <h4>Item type</h4>
                    <div>
                        <input type="radio" name="item-type" defaultValue={2} className="item-type-radio" />
                        <label htmlFor="item-type">Canned goods</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={2} className="item-type-radio" />
                        <label htmlFor="item-type">Frozen</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={3} className="item-type-radio" />
                        <label htmlFor="item-type">Produce</label>
                    </div>
                    <div>
                        <input type="radio" name="item-type" defaultValue={4} className="item-type-radio" />
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