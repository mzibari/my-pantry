import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <main role="main">
                <header role="banner">
                    <h1>Frugal</h1>
                    <h2>Your Digital Pantry</h2>
                </header>
                <section>
                    <p>Frugal helps you organize and keep track of your pantry</p>
                    <p>No more wondering whether you have tomato sauce or not</p>
                </section>
                <section>
                    Add items to your pantry as you buy them
        </section>
                <section>
                    Remove items as you use them
        </section>
                <section>
                    Share your pantry with family members
        </section>
                <section>
                    <button>Get Started</button>
                    <button>Login</button>
                </section>
            </main>
        )
    }
}