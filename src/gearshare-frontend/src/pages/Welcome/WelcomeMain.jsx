import { Link } from 'react-router'
import '../../index.css'
import '../../assets/styles/welcomePage.css'

function WelcomeMain() {

    return (
        <main>
            <div className="welcome-page-main-container">
                <div className="welcome-page-welcome-container">
                    <h1>Dobrodošli na GearShare!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Veniam error molestias deleniti? Reiciendis suscipit quibusdam accusamus<br />perferendis corrupti facilis? Placeat ea praesentium non quod architecto.</p>
                    <div className="welcome-page-button-container">
                        <button className="welcome-page-about-button">
                            <Link to='about'>
                                što je GearShare?
                            </Link>
                        </button>
                        <button className="welcome-page-browse-button">
                            <Link to='catalog'>
                                Pogledaj naš katalog...
                            </Link>
                        </button>
                        <button className="welcome-page-join-button">
                            <Link to='login'>
                                Pridruži nam se!
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WelcomeMain