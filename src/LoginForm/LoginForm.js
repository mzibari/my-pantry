import React, { Component } from 'react'
import './LoginForm.css'
import TokenService from '../services/token-service'
import ApiContext from '../ApiContext'

export default class LoginForm extends Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = ApiContext

    handleUserVerification = (username, password) => {
        const user = this.context.users.find(entry => entry.username === username.value)
        if (user) {
            if (user.password === password.value) {
                return true
            }
            else return false
        }
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { username, password } = event.target
        if (this.handleUserVerification(username, password)) {
            TokenService.saveAuthToken(
                TokenService.makeBasicAuthToken(username.value, password.value)
            )

            username.value = ''
            password.value = ''
            this.props.history.push('/pantry')
        }
        document.getElementById('error').innerHTML = "Wrong username or password"
    }

    render() {
        return (
            <section className="login-section">
                <h2>Log in</h2>
                <form id="login" className="LoginFrom"
                    onSubmit={this.handleSubmitBasicAuth}>

                    <input type="username" name="username" className="login-input" placeholder="username" required />
                    <input type="password" name="password" className="login-input" placeholder="password" required />
                    <span name="error" id="error"></span>


                    <button type="submit" className="login-button">Log in</button>

                </form>
            </section>
        )
    }
}