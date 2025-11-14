import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import WelcomeMain from "./WelcomeMain"
import '../../assets/styles/welcomePage.css'
import ImageBanner from './ImageBanner'

function WelcomePage() {

    return (
        <>
            <Header />
            <ImageBanner />
            <WelcomeMain />
            <Footer />
        </>
    )
}

export default WelcomePage