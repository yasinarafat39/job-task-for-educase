import React from 'react';

const Signup = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' />
                <input type="password" name="password" id="" placeholder='Password' />
                <button type='submit'>SIGNUP</button>
                 
            </form>
        </div>
    );
};

export default Signup;