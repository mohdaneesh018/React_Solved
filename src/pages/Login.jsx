import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hardCodedEmail = "abcd@gmail.com";
    const hardCodedPassword = "1234";


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        // if (email === hardCodedEmail && password === hardCodedPassword) {
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password
            });

            toast.success(response.data.message);

            console.log("Token Generated");

            localStorage.setItem("token", response.data.token);

            console.log(email, password);

            navigate("/home");

            // }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f3f4f6"
        }}>
            <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                width: "320px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center"
            }}>

                <h2>Login Page</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Enter Email"
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
                        type="password"
                        placeholder="Enter Password"
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

                    <button
                        type="submit"
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
                        Login
                    </button>

                    <Link
                        to="/register"
                        style={{
                            display: "block",
                            marginTop: "15px",
                            color: "#2563eb"
                        }}
                    >
                        Register
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login
