import React, { useState, useEffect } from "react";
import "../styling/LoginPage.css"
import { AuthProvider } from "./auth/auth";
import Signup from "./auth/signup";
import Signin from "./auth/signin";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";


export default function LoginPage() {
    const [type, setType] = useState("signIn");
    const [isAuth, setIsAuth] = useState(false);

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });
    
        return () => unsubscribe();
    }, []);

    const handleOnClick = text => {
        if (text !== type) {
        setType(text);
        return;
        }
    };

    const handleAuth = () => {
        setIsAuth(true);
    }

    const containerClass =
        "container " + (type === "signUp" ? "right-panel-active" : "");

    if (isAuth) {
        return (
            // <Welcome />
            <div className="loginPage">
                hello world
                <button onClick={logOut}>Sign-out</button>
            </div>
        )
    }

    return (
        <div className="loginPage">
            <AuthProvider>
                <h2>Sign in/up Form</h2>
                <div className={containerClass} id="container">
                    <Signup onAuth={handleAuth}/>
                    <Signin onAuth={handleAuth}/>
                    <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={() => handleOnClick("signIn")}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button
                                className="ghost "
                                id="signUp"
                                onClick={() => handleOnClick("signUp")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </AuthProvider>
        </div>
    );
}
