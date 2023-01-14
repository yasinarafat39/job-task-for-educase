import React from 'react';

import './Signup.css';

const Signup = () => {

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        form.reset();
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <button id='signup-btn' type='submit'>SIGNUP</button>
            </form>
        </div>
    );
};

export default Signup;