import React, { Component } from 'react'
import './Pantry.css'
import Item from './Item/Item'
import store from '../dummy-store'
import { findItem } from './Item/ItemService'

export default class Pantry extends Component {
    items = store.items.map(item =>
        <ul>
            <li>
                <Item item={findItem(store.items, item.id)} />
            </li>
        </ul>
    )
    render() {
        return (
            <section>
                <div>
                    Pantry:
                        {this.items}
                </div>
            </section>
        )
    }
}