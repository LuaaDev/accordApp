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


            <div className="loader">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
                <span style="--i:4;"></span>
                <span style="--i:5;"></span>
                <span style="--i:6;"></span>
                <span style="--i:7;"></span>
                <span style="--i:8;"></span>
                <span style="--i:9;"></span>
                <span style="--i:10;"></span>
                <span style="--i:11;"></span>
                <span style="--i:12;"></span>
                <span style="--i:13;"></span>
                <span style="--i:14;"></span>
                <span style="--i:15;"></span>
                <span style="--i:16;"></span>
                <span style="--i:17;"></span>
                <span style="--i:18;"></span>
                <span style="--i:19;"></span>
                <span style="--i:20;"></span>
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
