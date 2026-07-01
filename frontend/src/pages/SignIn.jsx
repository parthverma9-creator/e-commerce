import React from "react";

function SignIn() {
    return(
        <div className="auth-container">
            <div className="auth-box">
                <h1>Sign In</h1>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button>Sign In</button>
                
            </div>
        </div>

    );

}