import React from 'react';

function SignUp() {
    return (
        <div class="signup-container">
        <h2>Create an Account</h2>
        <form action="#" method="post">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p class="signin-link">Already have an account? <a href="#">Sign in</a></p>
    </div>  
    );
}

export default SignUp;
