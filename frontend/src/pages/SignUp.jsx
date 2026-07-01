import React from "react";

function SignUp(){
    return(
        <div className="auth-container">
            <div className="auth-box">
                <h1> Create Account</h1>

                <input type="text" placeholder="Full Name" />

                <input type="email" placeholder="Email" />

                <input type="password" placeholder="Password" />

                <input type="password" placeholder="Confirm Password" />
            </div>
        </div>
    )
}