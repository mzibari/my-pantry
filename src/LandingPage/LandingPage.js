import React, { Component } from 'react'
import './LandingPage.css'
import TokenService from "../services/token-service"

export default class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.redirectLogout = this.redirectLogout.bind(this)
    }

    redirectRegister = () => {
        this.props.history.push("/register")
    }
    redirectLogin = () => {
        this.props.history.push("/login")
    }

    redirectLogout() {    
        TokenService.clearAuthToken()
        this.props.history.push("/")
    }

    renderButtons() {
        if (TokenService.hasAuthToken()) {
            return (
                <section className="landing-sections">
                    <button onClick={this.redirectLogout}>Logout</button>
                </section>
            )
        }
        else {
            return (
                <section className="landing-sections">
                    <button onClick={this.redirectLogin}>Log in</button>
                    <button onClick={this.redirectRegister}>Register</button>
                </section>
            )
        }
    }

    render() {
        return (
            <main role="main" className="page">
                <header role="banner">
                    <h1>Your Digital Pantry</h1>
                </header>
                <section className="landing-sections">
                    <p>Organize and keep track of your pantry</p>
                </section>
                <section className="landing-sections">
                    <p>No more wondering whether you have tomato sauce or not</p>
                </section>
                <section className="landing-sections">
                    <p>Add items to your pantry as you buy them</p>
                </section>
                <section className="landing-sections">
                    <p>Remove items as you use them</p>
                </section>
                <section className="landing-sections">
                    <p>Try the app with our demo user account{' '}
                        <span className="demo-username">Username: </span>demo-user{' '}
                        <span className="demo-password">Password: </span>demo
                    </p>
                </section>
                {this.renderButtons()}
            </main>
        )
    }
}