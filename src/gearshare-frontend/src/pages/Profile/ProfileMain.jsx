import UserInfo from "./UserInfo"
import UserListings from "./UserListings"


function ProfileMain(){

    return(
        <div className="profile-main-container">
            <UserInfo />
            <UserListings />
        </div>
    )
}

export default ProfileMain