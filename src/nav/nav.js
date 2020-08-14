import React, { Component } from 'react'
/* import TokenService from '../services/token-service' */
import './Nav.css'


export default class Nav extends Component {
    //  Using state to manipulate the hamburger menu
    state = {
        isBurgerShown: false
    }

    handleBurger = () => {
        if(this.state.isBurgerShown){
        this.setState({
            isBurgerShown: false
        })}
        else {
            this.setState ({
                isBurgerShown: true
            })
        }
        
    }

    renderHome = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/')
    }
    renderPantry = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/pantry')
    }
    renderAddItem = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/additem')
    }
    render() {
        return (
            <nav>
                <button className='app-name' onClick={this.renderHome}>MyPantry</button>
                <label htmlFor='toggle' className='burger'>☰</label>
                <input type='checkbox' onClick={this.handleBurger} id='toggle' />
                <div id='toggled-menu' className={this.state.isBurgerShown ? 'show-menu menu' : 'hide-menu menu'}>
                    <button className='home' onClick={this.renderHome}>Home</button>
                    <button className='pantry' onClick={this.renderPantry}>Pantry</button>
                    <button className='add-item' onClick={this.renderAddItem}>Add Item</button>
                </div>
            </nav>
        )
    }
}