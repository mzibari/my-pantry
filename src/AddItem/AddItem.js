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
            <section className="add-item-section page">
                <h3>Add Item</h3>
                <form id="Add Item" onSubmit={this.handleSubmit}>

                    <input type="text" className="add-item-input" name="item-name" placeholder="item name" required />

                    <input type="text" className="add-item-input" name="quantity" placeholder="quantity" required />

                    <input type="text" className="add-item-input" name="exp-day" placeholder="expiration date" required />

                    <div className="item-type">
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