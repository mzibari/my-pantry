import React, { Component } from 'react'
import './Nav.css'


export default class Nav extends Component {

    renderHome = () => {
        this.props.history.push("/")
    } 
    renderPantry = () => {
        this.props.history.push("/pantry")
    }
    renderAddItem = () => {
        this.props.history.push("/additem")
    }
    render() {
        return (
            <nav>
                <div className="nav" id="nav">
                    <span className="app-name">MyPantry</span>
                    {/* <img src="https://i.ibb.co/RppgW7Y/pantry-Icon.png" className="logo" alt="My Pantry App Logo" /> */}
                    <label htmlFor="toggle" className="burger">☰</label>
                    <input type="checkbox" id="toggle" />
                    <div class="menu">
                        <a onClick={this.renderHome}>Home</a>
                        <a onClick={this.renderPantry}>Pantry</a>
                        <a onClick={this.renderAddItem}>Add Item</a>
                    </div>
                    <div className="menu">
                    </div>
                </div>
            </nav>
        )
    }
}