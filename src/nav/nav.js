import React, { Component } from 'react'
/* import TokenService from '../services/token-service' */
import './Nav.css'


export default class Nav extends Component {


    renderHome = () => {
        const element = document.getElementById("toggled-menu")
        if (element.classList.contains("toggle")){
            element.classList.remove("toggle")
        }
        else {
            element.classList.add("toggle")
        }
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
                <button className="app-name" onClick={this.renderHome}>MyPantry</button>
                <label htmlFor="toggle" className="burger">☰</label>
                <input type="checkbox" id="toggle" />
                <div className="menu" id="toggled-menu">
                    <button className="home" onClick={this.renderHome}>Home</button>
                    <button className="pantry" onClick={this.renderPantry}>Pantry</button>
                    <button className="add-item" onClick={this.renderAddItem}>Add Item</button>
                    {/* <button onClick={TokenService.clearAuthToken()}>Log Out</button> */}
                </div>
            </nav>
        )
    }
}