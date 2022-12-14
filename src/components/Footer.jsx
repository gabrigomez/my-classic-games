import { FinnTheHuman } from 'phosphor-react';
import React from 'react';
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        Develop by 
      </p>
      <FinnTheHuman className='footer-icon' size={20} color="black" />
      <a className='footer-link' href="https://github.com/gabrigomez">gabrigomez</a>
    </div>
  )
}