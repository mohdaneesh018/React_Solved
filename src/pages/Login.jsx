import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();


        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        toast.success("Login Successfull");
        localStorage.setItem("isLoggedIn", "true");

        console.log(email, password);

        navigate("/dashboard");
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br />

                <input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />

                <button type='submit'>Login</button>
                <br />

                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login
