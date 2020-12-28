import React, { useState, useEffect } from "react";
import { db } from "../Fire";
import "./Services.css";
import { useHistory } from 'react-router-dom';



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const [loader, setLoader] = useState(false);

  const history = useHistory();



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        number: number,
        occupation: occupation,
        location: location,
        address: address,
        email: email,
      
      })
      .then(() => {
        setLoader(false);
        history.push('/SuccesForm')
        
       
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setLocation("");
    setNumber("");
    setAddress("");
    setOccupation("")


  };

  return (
    

    <>

      <div className='boss'>

        <div className='child'>



          <form onSubmit={handleSubmit}>
              
              <div className='logo'>
              <h1>Register </h1>
              </div>
            
            <h5>Name</h5>
            <input
            required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

           <h5>Email</h5>
            <input
             required
              type='email'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

             <h5>Location</h5>
            <input
            required
             type='text'
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

             <h5>Phone Number</h5>
            <input
            required
              type='number'
              placeholder="Mobile number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />


            <h5>Address</h5>
            <input
            required
              type='adress'
              placeholder="add address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <h5>Occupation</h5>
            <input
            required
              placeholder="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />

            <button
             className='registar__btn'
             type='submit'
             >
               Proceed
             </button> 

          </form>
        
        </div>

      </div>
    </>

  )
};

export default Contact;