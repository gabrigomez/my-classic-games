import { FinnTheHuman } from 'phosphor-react';
import React from 'react';
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Develop by <a href="https://github.com/gabrigomez">
        <FinnTheHuman className='footer-icon' size={24} color="black" />
        gabrigomez
        </a>
      </p>
    </div>
  )
}