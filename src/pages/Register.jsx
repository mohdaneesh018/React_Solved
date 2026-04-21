import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

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

        toast.success("Register Successful");

        localStorage.setItem("user", JSON.stringify({ email, password }));

        navigate("/");
    }

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to right, #eef2ff, #e0f2fe)"
        }}>

            <div style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "12px",
                width: "320px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                textAlign: "center"
            }}>

                <h2>Register Page</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "6px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "6px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type='password'
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "6px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "6px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <button
                        type='submit'
                        style={{
                            width: "100%",
                            padding: "10px",
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            marginTop: "10px"
                        }}
                    >
                        Register
                    </button>

                    <Link
                        to="/"
                        style={{
                            display: "block",
                            marginTop: "15px",
                            color: "#2563eb"
                        }}
                    >
                        Login
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Register;