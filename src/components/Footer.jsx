import { GithubLogo } from 'phosphor-react';
import React from 'react';
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        Develop by gabrigomez
      </p>
      <div className="line" />          
      <a className='footer-link' href="https://github.com/gabrigomez">
        <GithubLogo className='footer-icon' size={20} />
      </a>
     
    </div>
  )
}