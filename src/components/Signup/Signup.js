import React from 'react';

import './Signup.css';

const Signup = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' />
                <input type="password" name="password" id="" placeholder='Password' />
                <button id='signup-btn' type='submit'>SIGNUP</button>

            </form>
        </div>
    );
};

export default Signup;