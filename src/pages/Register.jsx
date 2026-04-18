import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }

        alert("Register Successfully")

        console.log(name, email, password);
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    type='email'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    type='password'
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <input
                    type='password'
                    placeholder='Enter Your Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
