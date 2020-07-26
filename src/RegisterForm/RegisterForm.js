import React, { Component } from 'react'
import './RegisterForm.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <form id="register">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" required />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" name="confirm-password" required />
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        )
    }
}