import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {

    setRedirect = () => {
        this.props.history.push("/register")
    }

    render() {
        return (
            <main role="main">
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
                    <button onClick={this.setRedirect}>Get Started</button>
                </section>
            </main>
        )
    }
}