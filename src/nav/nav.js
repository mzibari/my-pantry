import React, { Component } from 'react'
import TokenService from '../services/token-service'
import './Nav.css'


export default class Nav extends Component {

    /* toggleMenu () {
        document.getElementById("toggle").checked = false
    } */

    renderHome = () => {
        /* this.toggleMenu() */
        this.props.history.push("/")
    }
    renderPantry = () => {
        /* this.toggleMenu() */
        this.props.history.push("/pantry")
    }
    renderAddItem = () => {
        /* this.toggleMenu() */
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
                    <div className="menu">
                        <a onClick={this.renderHome}>Home</a>
                        <a onClick={this.renderPantry}>Pantry</a>
                        <a onClick={this.renderAddItem}>Add Item</a>
                        {/* <a onClick={TokenService.clearAuthToken()}>Log Out</a> */}
                    </div>
                </div>
            </nav>
        )
    }
}