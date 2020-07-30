import React, { Component } from 'react'
import './Nav.css'


export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav" id="nav">
                    {/* <img src="https://i.ibb.co/RppgW7Y/pantry-Icon.png" className="logo" alt="My Pantry App Logo" /> */}
                    <span className="title">My Pantry</span>
                    <label htmlFor="toggle" className="burger">☰</label>
                    <input type="checkbox" id="toggle" />
                    <div class="menu">
                        <a href="#project-section">Home</a>
                        <a href="#about-section">Pantry</a>
                        <a href="#contact-info">Add Item</a>
                    </div>
                    <div className="menu">
                    </div>
                </div>
            </nav>
        )
    }
}