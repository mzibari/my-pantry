import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 