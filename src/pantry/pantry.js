import React, { Component } from 'react'
import './Pantry.css'
import Item from './Item/Item'
import store from '../dummy-store'
import { findItem } from './Item/ItemService'
import ApiContext from '../ApiContext'

export default class Pantry extends Component {
    static contextType = ApiContext

    userItems = store.items.map((item, i) =>
        <ul key={i}>
            <li key={i}>
                <Item item={item} key={i} />
            </li>
        </ul>
    )
    render() {
        return (
            <section className="pantry-section">
                Pantry:
                {this.userItems}
            </section>
        )
    }
}