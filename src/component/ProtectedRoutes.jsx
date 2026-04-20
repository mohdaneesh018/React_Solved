import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ childrens }) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        return <Navigate to="/" />
    } else {
        return childrens;
    }
}

export default ProtectedRoutes;