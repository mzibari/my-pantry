import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <main role="main">
                <header role="banner">
                    <h1>Your Digital Pantry</h1>
                </header>
                <section>
                    <p>Organize and keep track of your pantry</p>
                </section>
                <section>
                    <p>No more wondering whether you have tomato sauce or not</p>
                </section>
                <section>
                    <p>Add items to your pantry as you buy them</p>
                </section>
                <section>
                    <p>Remove items as you use them</p>
                </section>
                <section>
                    <p>Share your pantry with family members</p>
                </section>
                <section>
                    <button>Get Started</button>
                </section>
            </main>
        )
    }
}