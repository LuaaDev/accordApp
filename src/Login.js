import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase"
import React from 'react'
import './Login.css'

function Login() {
    const signInGoogle = _ => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="sky__container">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>

            <h2>You need to login in order to enter the app!</h2>

            <div className="login__logo">
                <img src="" alt=""></img>
            </div>

            <Button onClick={signInGoogle}>Sign in with Google</Button>
        </div>
    );

}

export default Login
