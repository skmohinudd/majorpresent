import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Fire';
import './Signup.css';
import { BounceLoader } from 'react-spinners'

function SignUp() {
    const history = useHistory();
    const [load,setLoad] = useState(false);

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const signIn = ( e )=>{
       e.preventDefault();
        
       auth.signInWithEmailAndPassword(email,password)
       .then( auth => {
           history.push('/')
       }).catch(error => alert(error.message))
    }

    const register = ( e )=>{
        e.preventDefault();

          auth.createUserWithEmailAndPassword(email,password)
          .then( (auth) => {
              // auth is successfully go and create a new user with email and password in firebase
              console.log(auth);
              if(auth) {
                  history.push('/')
              }
              //we use catch for any error occure or happen
          }).catch(error => alert(error.message))
     }

    return (
        <div className='login'>

        <Link to='/'  className='login__logo' >
          <span>   Make Future <i class='fab fa-typo3' /></span>
        </Link>

        <div className='login__container'>
             <h1>Sign-in</h1>
             <form>
                 <h5>E-mail</h5>
                 <input type='text'
                    required
                    value={email} onChange=
                     {e => setEmail(e.target.value)}
                 />

                 <h5>Paasword</h5>
                 <input 
                 required
                 type='password' value= {password} onChange =
                     {e => setPassword(e.target.value)}
                 />

                 <button className='login__signInButton'
                  type='submit'
                   onClick={signIn}>
                 Sign In</button>

                 <p>
                     By signing-in you are agree to makefuture company 
                     terms and conditions and you can see our Privacy Notice and cookies
                 </p>

                 <button className='login__registerButton'
                   onClick={register}
                   >Sign Up</button>
                   <div class="loader"></div>
             </form>
        </div>

          
        </div>
    )
}

export default SignUp;
