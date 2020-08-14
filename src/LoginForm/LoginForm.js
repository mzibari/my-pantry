import React, { Component } from 'react'
import './LoginForm.css'
import TokenService from '../services/token-service'
import ApiContext from '../ApiContext'


export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmitBasicAuth = this.handleSubmitBasicAuth.bind(this)
    }

    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    

    static contextType = ApiContext

    // Validating user and password against the server
    handleUserVerification = (username, password) => {
        const user = this.context.users.find(entry => entry.username === username.value)
        if (user) {
            return user.user_password === password.value
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
            this.props.history.push('/Pantry')
        }
        else document.getElementById('error').innerHTML = 'Wrong username or password'
    }

    render() {
        return (
            <section className='login-section page'>
                <h2>Log in</h2>
                <form id='login' className='LoginFrom'
                    onSubmit={this.handleSubmitBasicAuth}>

                    <input type='username' autoComplete='false' name='username' className='login-input' placeholder='username' required />
                    <input type='password' autoComplete='false' name='password' className='login-input' placeholder='password' required />
                    <span name='error' id='error'></span>


                    <button type='submit' className='login-button'>Log in</button>

                </form>
            </section>
        )
    }
}