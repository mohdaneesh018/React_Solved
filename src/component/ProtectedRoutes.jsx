import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
        return <Navigate to="/" />
    } else {
        return children;
    }
}

export default ProtectedRoutes;