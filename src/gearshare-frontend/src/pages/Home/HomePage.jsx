import Header from "../../Components/Header"
import Navbar from "../../Components/Navbar"
import HomePageMain from "./HomePageMain"
import Footer from "../../Components/Footer"
import '../../index.css'

function HomePage(){

    return(
        <>
            <Header />
            <Navbar />
            <HomePageMain />
            <Footer />
        </>
    )
}

export default HomePage