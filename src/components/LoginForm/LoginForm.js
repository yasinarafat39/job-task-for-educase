import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div>
            <form>
                <input type="email" name="email" id="" placeholder='Email Address' />
                <input type="password" name="password" id="" placeholder='Password' />
                <button type='submit'>LOGIN</button>
                <p className='handleForgotPassword'>Forgot Password?</p>
            </form>
        </div>
    );
};

export default LoginForm;