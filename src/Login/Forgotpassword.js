import React from 'react';

function Forgotpassword() {
    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <p>Please enter your email address to reset your password.</p>
            <form action="#" method="post">
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            <p className="signin-link">
                Remembered your password? <a href="#">Sign in</a>
                <br></br>
            </p>  <br></br>

        </div>
    );
}

export default Forgotpassword;
