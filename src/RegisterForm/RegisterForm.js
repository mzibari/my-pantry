import React, { Component } from 'react'
import './RegisterForm.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <section className="register-section">
                <h2>Register</h2>
                <form id="register" className="RegisterForm">
                    <input type="text" name="first-name" className="register-input" placeholder="first name" required />
                    <input type="text" name="last-name" className="register-input" placeholder="last name" required />
                    <input type="email" name="email" className="register-input" placeholder="email" required />
                    <input type="password" name="password" className="register-input" placeholder="password" required />
                    <input type="password" name="confirm-password" className="register-input" placeholder="confirm password" required />

                    <button type="submit" className="register-button">Submit</button>
                </form>
            </section>
        )
    }
}