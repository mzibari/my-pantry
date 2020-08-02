import React, { Component } from 'react'
/* import TokenService from '../services/token-service' */
import './Nav.css'


export default class Nav extends Component {


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
                <img src="https://i.ibb.co/jzxthVL/logo192.png" className="logo" alt="My Pantry App Logo" />
                <button className="app-name" onClick={this.renderHome}>MyPantry</button>
                <label htmlFor="toggle" className="burger">☰</label>
                <input type="checkbox" id="toggle" />
                <div className="menu">
                    <button onClick={this.renderHome}>Home</button>
                    <button onClick={this.renderPantry}>Pantry</button>
                    <button onClick={this.renderAddItem}>Add Item</button>
                    {/* <button onClick={TokenService.clearAuthToken()}>Log Out</button> */}
                </div>
            </nav>
        )
    }
}