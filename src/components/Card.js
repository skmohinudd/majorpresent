import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Children Who got Adopted  </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baby1.jpg'
              text='in India more 30 millios orphans'
              
              path='/children'
            />
            <CardItem
              src='images/baby2.jpg'
              text='Due to different Reasons they join orphan Schools'
            
              path='/children'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baby3.jpg'
              text=" they 'cant't full their Needs'"
             
              path='/children'
            />
            <CardItem
              src='images/baby4.jpg'
              text='Our Job is try to maken a Bright future for them'
             
              path='/children'
            />
            <CardItem
              src='images/baby5.jpg'
              text='we Make the way  Lot easier To the parents who ready to adopt '
             
              path='/children'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baby6.jpg'
              text='the Parents who have  genetical issues need not to shy'
             
              path='/children'
            />
            <CardItem
              src='images/main.jpg'
              text='So dont shy to Adopt a child '
             
              path='/children'
            />
            <CardItem
              src='images/img-1.jpg'
              text='This way we can Control the fatal growth of population in India'
              
              path='/children'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;