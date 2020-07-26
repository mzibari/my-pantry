import React from 'react'
import ReactDOM from 'react-dom'
import Pantry from './Pantry'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Pantry />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 