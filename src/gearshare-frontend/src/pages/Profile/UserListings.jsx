import { useState } from "react"
import { useAuth } from '../../hooks/useAuth'


function UserListings() {

    const {user, loading, handleLogin, handleLogout } = useAuth()


    const userHeader = function () {
        return (
            <>
                <div className="rent-lent-container">
                    <h4>Iznajmljuje</h4>
                    <h4>Iznajmio/la</h4>
                </div>
                <hr />
            </>
        )
    }




    return (
        <div className="user-listings-container">
            <h1>Povijest iznajmljivanja</h1>
            {user && userHeader}
            {/* props = listings od sellera i rental di je seller = client */ }
        </div>
    )
}

export default UserListings