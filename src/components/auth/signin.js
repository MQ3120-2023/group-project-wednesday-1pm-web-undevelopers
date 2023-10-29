import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Signin({ onAuth }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("logged in");
            resetInput();
            onAuth();
        })
        .catch((err) => {
            console.error(err.message);
        });
    };

    const resetInput = () => {
        setEmail("");
        setPassword("");
    };




    return (
        <div className="form-container sign-in-container">
            <div className="form">
                <h1>Sign in</h1>
                <div className="social-container">
                    <div className="social">
                    <i className="fab fa-facebook-f" />
                    </div>
                    <div className="social">
                    <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="social">
                    <i className="fab fa-linkedin-in" />
                    </div>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="signin-btn" onClick={login}>Sign In</button>
            </div>
        </div>
    )
}

export default Signin;
