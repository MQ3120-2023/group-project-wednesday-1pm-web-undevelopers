import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Signup({ onAuth }) {
    const [RegEmail, setRegEmail] = useState("");
    const [RegPassword, setRegPassword] = useState("");

    const register = () => {
        createUserWithEmailAndPassword(auth, RegEmail, RegPassword)
        .then(() => {
            resetInput();
            onAuth();
        })
        .catch((err) => {
            console.error(err.message);
        });
    };

    const resetInput = () => {
        setRegEmail("");
        setRegPassword("");
    };


    return (
        <div className="form-container sign-up-container">
            <div className="form">
                <h1>Create Account</h1>
                <div className="registerInput">
                    <input
                        type="email"
                        value={RegEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={RegPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="signup-btn" onClick={register}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup