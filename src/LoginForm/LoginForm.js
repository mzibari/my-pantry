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
        console.log(`username ${username.value}`)
        console.log(`password ${password.value}`)
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
        /* const username = event.target['username'].value
        const password = event.target['password'].value */
        const { username, password } = event.target
        console.log(username.value)

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
            <form id="login" className="LoginFrom"
                onSubmit={this.handleSubmitBasicAuth}>

                <label htmlFor="username">Username</label>
                <input type="username" name="username" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
                <span name="error" id="error"></span>

                <div>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        )
    }
}