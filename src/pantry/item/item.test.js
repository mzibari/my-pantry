import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Item />, div)
    ReactDOM.unmountComponentAtNode(div)
})