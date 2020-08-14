import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id='contact-info'>
        <ul className='contact-ul'>
          <li>
            <a href='https://www.linkedin.com/in/mahmood-nihad-083739142/' target='_blank'><img src='
                    https://i.ibb.co/0B3MNsy/linkedin.png' alt='linkedin logo' className='contact' /></a>
          </li>
          <li>
            <a href='mailto:m.zibari@gmail.com' target='_blank'><img src='https://i.ibb.co/4p2mLwQ/email.png' alt='email logo' className='contact' /></a>
          </li>
          <li>
            <a href='tel:6824102016' target='_blank'><img src='https://i.ibb.co/0fXhncH/phone.png' alt='phone logo' className='contact' /></a>
          </li>
          <li>
            <a href='https://github.com/mzibari' target='_blank'><img src='https://i.ibb.co/ZG9cY5n/github.png' alt='githib logo' className='contact' /></a>
          </li>
        </ul>
      </footer>
        )
    }
}