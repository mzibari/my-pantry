import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <form id="login">
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
              
                <div>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        )
    }
}