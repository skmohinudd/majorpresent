  
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {



 
  return (
    <>
    <div className='hero-container'>
    
      <img src = 'images/main.jpg' alt='' className='home-image'/>
      <h2>
        Welcome ❤️ 
        we are the Reputed Agency wich make Easier to the parents who wants to Adopt a baby from trusts and governament child care centers.
        for more information let Get Start 
      </h2>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
    </>
  );
}

export default HeroSection;