import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 