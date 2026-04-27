import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"),
            navigate("/")
    };

    const handleUpdate = async () => {
        const response = await axios.put("http://localhost:3000/profile",
            {
                name,
                email
            },
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        );
    };

    const handleDelete = async () => {
        const response = await axios.delete("http://localhost:3000/profile", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });

        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("http://localhost:3000/profile", {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });

                setUser(response.data.user);
                setName(response.data.user.name);
                setEmail(response.data.user.email);

            } catch (error) {
                console.log(error.response.data.message);
                navigate("/");
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>

            <h2>{user.name}</h2>
            <h2>{user.email}</h2>

            <input
                type="text"
                value={name}
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <button onClick={handleUpdate}>Update Profile</button>
            <br /><br />

            <button onClick={handleLogout}>Logout</button>
            <br /><br />

            <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default Home
