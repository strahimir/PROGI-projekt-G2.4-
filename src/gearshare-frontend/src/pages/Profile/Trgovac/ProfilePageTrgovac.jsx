import Header from "../../../Components/Header"
import Footer from "../../../Components/Footer"
import ProfilePageTrgovacMain from "./ProfilePageTrgovacMain"
import UserInfo from '../UserInfo'
import '../../../index.css'

function ProfilePage() {
    return (
        <>
            <Header />
            <UserInfo />
            <ProfilePageTrgovacMain />
            <Footer />
        </>
    )
}

export default ProfilePage