import React, { Component } from 'react'
import './RegisterForm.css'
import ApiContext from '../ApiContext'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.handleNewUser = this.handleNewUser.bind(this)
    }

    static contextType = ApiContext

    

    handleNewUser(e) {
        e.preventDefault()
        if (document.getElementById('password').value === document.getElementById('confirm-password').value) {
            let doesUserExist = false
            const newUser = {
                username: document.getElementById('user-name').value,
                email: document.getElementById('email').value,
                user_password: document.getElementById('password').value,
            }
            this.context.users.forEach(user => {
                if (user.username === newUser.username) {
                    doesUserExist = true
                }
            })
            if (!doesUserExist) {
                this.context.addUser(newUser)
                this.props.history.push('/login')
            }
            else document.getElementById('registrationError').innerHTML = 'This user already exists'
        }
        else document.getElementById('registrationError').innerHTML = 'Password do not match'

    }

    render() {
        return (
            <section className='register-section page'>
                <h2>Register</h2>
                <form id='register' className='RegisterForm' onSubmit={this.handleNewUser}>
                    <input type='text' autoComplete='false' id='user-name' name='user-name' className='register-input' placeholder='user name' required />
                    <input type='email' autoComplete='false' id='email' name='email' className='register-input' placeholder='email' required />
                    <input type='password' autoComplete='false' id='password' name='password' className='register-input' placeholder='password' required />
                    <input type='password' autoComplete='false' id='confirm-password' name='confirm-password' className='register-input' placeholder='confirm password' required />

                    <button type='submit' className='register-button'>Submit</button>
                    <span id='registrationError' className='error'></span>
                </form>
            </section>
        )
    }
}