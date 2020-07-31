import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {

    redirectRegister = () => {
        this.props.history.push("/register")
    }
    redirectLogin = () => {
        this.props.history.push("/login")
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
                    <p>Share your pantry with family members</p>
                </section>
                <section className="landing-sections">
                    <button onClick={this.redirectLogin}>Log in</button>
                </section>
                <section className="landing-sections">
                    <button onClick={this.redirectRegister}>Register</button>
                </section>
            </main>
        )
    }
}