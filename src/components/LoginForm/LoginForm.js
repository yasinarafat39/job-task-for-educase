import React from 'react';
import './LoginForm.css';

const LoginForm = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        form.reset();
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <button type='submit'>LOGIN</button>
                <p className='handleForgotPassword'>Forgot Password?</p>
            </form>
        </div>
    );
};

export default LoginForm;