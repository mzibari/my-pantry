import React, { Component } from 'react'
import './LoginForm.css'
import TokenService from '../services/token-service'

export default class LoginForm extends Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { username, password } = event.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = ''
        password.value = ''
        this.props.history.push('/pantry')
    }

    render() {
        return (
            <form id="login" className="LoginFrom"
                onSubmit={this.handleSubmitBasicAuth}>

                <label htmlFor="username">Username</label>
                <input type="username" name="username" required />
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