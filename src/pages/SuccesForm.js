import React from 'react';
import './Success.css';
import { Link } from 'react-router-dom'

function SuccesForm() {
    return (
      <div className='boss-div'>
          <h1>Success👍</h1>

         
               <h2>
                   Your Form has Succesfully submitted we will Schedule a meeting within three days
               </h2>

               <Link to = '/'><button className='btn'>Back to Home</button></Link>
          

          
      </div>
    )
}

export default SuccesForm
