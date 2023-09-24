import React, { useState } from 'react';
import './Login.css';
import gug from './google.png';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';


const Login = () => {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    const [action, setAction]=useState("Login");
  

  




  const [user] = useAuthState(auth);

  return (
    <>
    {user ? <></> :
    <div>
     <section class="container1 forms">
            <div class="form login">
                <div class="form-content">
                    <header>{action}</header>
                    <form action="#">
                        {action==="Login" ? <div></div>: <div class="field input-field">
                            <input type="text" placeholder="Name" class="input" required />
                        </div>}
                        {/* <p>{formError.name}</p> */}

                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input" required />
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password" required />
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        {action==="Login" ? <div></div>:
                         <div class="field input-field">
                         <input type="password" placeholder="Confirm password" class="password" required />
                         <i class='bx bx-hide eye-icon'></i>
                        </div>}

                        {action==="Sign Up" ? <div></div>:
                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div> }

                        <div class={action==="Sign Up"?"button gray": "button"} onClick={()=>{setAction("Login")}}>
                            <button>Login</button>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account?</span>
                    </div>
                    <div class={action==="Login"?"button gray": "button"} onClick={()=>{setAction("Sign Up")}}>
                            <button>Sign up</button>
                        </div>
                </div>



                {action==="Login" ? <div></div>:
                <div class="media-options">
                    <button class="field google" onClick={signInWithGoogle}>
                        <img src={gug} alt="" class="google-img" />
                        <span>Sign Up with Google</span>
                    </button>
                </div>}
                {action==="Sign Up" ? <div></div>:
                <div class="media-options">
                    <button class="field google" onClick={signInWithGoogle}>
                        <img src={gug} alt="" class="google-img" />
                        <span>Login with Google</span>
                    </button>
                </div>}

            </div>
        </section>
    </div>
}

    </>

  );
};

export default Login;