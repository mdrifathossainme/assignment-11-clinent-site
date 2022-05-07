import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import { Icon } from 'react-icons-kit';
import {checkCircleO} from 'react-icons-kit/fa/checkCircleO'

const  SignUp = () => {
 const [signInWithGoogle, user, loading, oerror] = useSignInWithGoogle(auth);
 const [ createUserWithEmailAndPassword,epuser,eploading, error,] =useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true })
 const [updateProfile, updating, updateusererror] = useUpdateProfile(auth);

 const[loginguser,loinge]=useAuthState(auth)
 const [customError,setError]=useState("");



const handleGoogleSignup=()=>{
    signInWithGoogle()
    toast("Signup Success")

}
if(loading||eploading||loinge){
    <Loading/>
}
const handleEmailPasswordSingnup= async (e)=>{

    e.preventDefault();
      const name= e.target.name.value;
      const email= e.target.email.value;
      const password= e.target.password.value;
      const cpassword= e.target.cpassword.value;
      const mainPass=password===cpassword;

      if(!mainPass){
        setError("password don't match")
        return

    }
    else{
       setError('')
    await  createUserWithEmailAndPassword(email,password);
      await updateProfile({ displayName: name });
      await  toast("Signup Success")
      e.target.reset()  
      
    }
     
     
}




    return (
        <div className='signup-area'>
              
           {
              loginguser?
               <>
         <div className="bg-color">
                <div className="signup-success">
                    <div className="success-content">
                       <div className="succestitle"> <h4>Signup Success </h4>  <span ><Icon  icon={checkCircleO} size={40}/></span> </div>
                        <Link to="/"><p className='success-btn'>Home</p></Link>     
                    </div>
                </div>
            </div>

              </>:<> 
              <div className="bg-color">
                <div className="signup-form">
                    <div className="sinup-content">
                        <h4>Sign Up</h4>
                        <form className='form' onSubmit={handleEmailPasswordSingnup}>
                            <label htmlFor="name">Name</label>
                            <input id='name' type="text" name='name' placeholder='Your Name' required />

                            <label htmlFor="email">Email</label>
                            <input id='email' type="emai" name='email' placeholder='Your Email' required />
                            {
                            
                            error? <span className='ep'>{error?.message.slice(22,42)}</span> :""
                            }     
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" name='password' placeholder='Password' required />

                            <label htmlFor="cpassword">Confirm Password</label>
                            <input  id='cpassword' type="password" name='cpassword' placeholder='Confirm Password' required />
                            <p className='error'>{customError? customError:""}</p>
                            <input type="submit" value="SignUp" />
                        </form>
                        <p className='swap-btn'><span className='alresy-text'>Already have an account?</span> <span ><Link to="/login"><span className='signup-login-btn'>Login</span></Link></span></p>
                        <button onClick={handleGoogleSignup}><img className='google-img' src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'} alt="" />
                            Continue with Google
                            </button>
                    </div>
                </div>
            </div>
              </> 
           }
        </div>
    );
};

export default SignUp;