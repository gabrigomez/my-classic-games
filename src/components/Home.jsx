import { Atom } from 'phosphor-react';
import React from 'react';
import './Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-card'>        
        <h1 className='home-title text-3xl'>
          Welcome to My Classic Game List!        
        </h1>
        <div className='home-text'>
          <p> Design with ReactJS</p>
          <Atom className='home-icon mt-4' size={28} color="rgb(0, 174, 255)" />
        </div>
      </div>
    </div>
  )
}