import { Link } from 'react-router'
import '../index.css'
import gearShareLogo from '../assets/images/gearshare-logo.png'

function Header() {
    return (
        <header>
            <div className="logo-image-container">
                <img
                    src={gearShareLogo}
                    alt="" />
                <h2>GearShare</h2>
            </div>
            <div className="welcome-page-buttons-container">
                <div className="about-container">
                    <Link to='/about'>
                        O nama
                    </Link>
                </div>
                <div className="login-container">
                    <Link to='/login'>
                        Prijavi se
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header