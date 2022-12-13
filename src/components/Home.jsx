import { Atom } from 'phosphor-react';
import React from 'react';
import './Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-card'>        
        <h1 className='home-title'>
          Welcome! This is your home component.        
        </h1>
        <div className='home-text'>
          <p> Design with ReactJS</p>
          <Atom size={24} />
        </div>
      </div>
    </div>
  )
}