import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        alert("Login Successfully")

        console.log(email, "email", password, "password");
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login