
import React from 'react';

function Login() {
    return (
        <div className="container">
            <h2>Sign In</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
                <br></br>  <br></br>
            </form>
            <p className="signup-link">Don't have an account? </p>
            <button type="button" onClick={() => window.location.href = '/SignUp'}>SignUP </button>
            <br></br> <br></br> <br></br> 
            <button type="button" onClick={() => window.location.href = '/Forgotpassword'}>ForgotPassword</button>
            <br></br>  <br></br>
        </div>
    );
}

export default Login;
 