import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "./hooks/useAuth";

const RootRedirect = () => {

    const { user, loading, handleLogin, handleLogout } = useAuth()

    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return user
    ? <Navigate to="/home" replace />
    : <Navigate to="/welcome" replace />

}

export default RootRedirect