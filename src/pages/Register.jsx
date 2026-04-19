import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password does not match");
            return;
        }

        toast.success("Register Successfull");

        console.log(name, email, password, confirmPassword);
    }

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br />

                <input
                    type='email'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br />

                <input
                    type='Password'
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />

                <input
                    type='password'
                    placeholder='Enter Your Confirm Password'
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <br />

                <button type='submit'>Register</button>
                <br />
                
                <Link to="/">Login</Link>
            </form>
        </div>
    )
}

export default Register
