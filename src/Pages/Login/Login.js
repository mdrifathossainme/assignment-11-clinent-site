import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import './Login.css'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const[users]=useAuthState(auth)
    const location=useLocation();
    const navigate=useNavigate();
    const [forget,setForget]=useState(false);
    const [reset,setReset]=useState()
    const [sendPasswordResetEmail, sending, reerror] = useSendPasswordResetEmail(auth);
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const [signInWithEmailAndPassword,epuser,eploading,eperror,  ] = useSignInWithEmailAndPassword(auth);
    const handleToggle=()=>{    
        if(type==='password'){
          setIcon(eye);      
          setType('text');
        }
        else{
          setIcon(eyeOff);     
          setType('password');
        }
      }

    const handleGoogleSignup=()=>{
        signInWithGoogle()
    }


    const handleEmailPasswordLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        signInWithEmailAndPassword(email,password)
        e.target.reset()

    }
    const from= location.state?.from?.pathname ||"/"

        if(users){
        navigate(from, {replace:true})
        }
        const handleForgetPassword=()=>{
            setForget(true)
        }
        const handleLogin=()=>{
            setForget(false)
        }
const handlepasswordreset=(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(reset);
    e.target.reset()
    toast('Check your Email')
 
}
const handleresetemail=(e)=>{
    const email=e.target.value;
    setReset(email)
}
console.log(eperror?.message)



    return (
        <div className='signup-area'>
       {
           forget===true? <>
            <div className="bg-color">
            <div className="signup-form">
                <div className="sinup-content">
                    <h4>Forget Password</h4>
                    <form className='form' onSubmit={handlepasswordreset}>
                        <label htmlFor="email">Email</label>

                        <input onBlur={handleresetemail} id='email' type="email" name='email' placeholder='Your Email' required />
                        {reerror?  <span className='ep'>{reerror.message.slice(17,36)}</span>:<>
                     
                        </>
                         }
                        <input type="submit" value="Reset password" />
                    </form>
                    <p className='forget-btn' onClick={handleLogin}>Login</p>

                </div>
            </div>
        </div></>:<> <div className="bg-color">
           <div className="signup-form">
               <div className="sinup-content">
                   <h4>Login Page</h4>
                   <form className='form' onSubmit={handleEmailPasswordLogin}>
                       <label htmlFor="email">Email</label>
                       <input  id='email' type="email" name='email' placeholder='Your Email' required />


                       <span className='login-password'>
                       <label htmlFor="password">Password</label>
                       <input id='password' type={type} name='password' placeholder='Password' required />
                       <span ><Icon onClick={handleToggle} icon={icon} className='eyeicon' size={25}/></span> 
                       </span>

                       {
                           eperror?  <span className='ep'>{eperror?.message.slice(17,36)}</span>:""
                       }
                      

                       <input type="submit" value="LogIn" />
                       <p className='swap-btn'>New to Aamadat <span ><Link to="/signup"><span className='signup-login-btn'>Create New Account</span></Link></span></p>
                       <p className='forget-btn' onClick={handleForgetPassword}>Forget Paasword</p>

                      

                   </form>
                   <button onClick={handleGoogleSignup}><img className='google-img' src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'} alt="" />
                           Continue with Google
                    </button>
               </div>
           </div>
       </div></>
       }
    </div>
    );
};

export default Login;