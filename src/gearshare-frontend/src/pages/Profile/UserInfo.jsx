import placeholderImg from '../../assets/images/placeholder_img.png'


function UserInfo(){

    return(
        <div className="user-profile-container">
            <div className="profile-picture-container">
                <img src={placeholderImg} alt="" className="profile-picture" />
            </div>
            
            <div className="user-information-container">
                <div className="edit-profile-button-container">
                    <button className="edit-profile-button">

                    </button>
                </div>
                <h2 className="username"></h2>
                <h3 className="name"></h3>
                <p className="address"></p>
                <p className="description"></p>
                <div className="contacts">
                    <h4 className="email">E-mail:</h4>
                    <h4 className="tel">Broj telefona:</h4>
                </div>
            </div>
        </div>
    )
}

export default UserInfo