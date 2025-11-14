import { Link } from 'react-router'
import '../../index.css'
import '../../assets/styles/welcomePage.css'
import TopCategories from '../../Components/TopCategories'

function WelcomeMain() {
  return (
    <main className="welcome-main">
      {/* Sekcija 1: Najprodavanije kategorije */}

      <TopCategories />


      {/* Sekcija 2: Kako funkcionira GearShare */}
      <section className="how-it-works">
        <h2>Kako funkcionira GearShare?</h2>
        <div className="steps-container">
          <div className="step">
            <h3>1. Pregledaj</h3>
            <p>Pretraži dostupnu opremu prema kategoriji i lokaciji.</p>
          </div>
          <div className="step">
            <h3>2. Unajmi</h3>
            <p>Rezerviraj opremu i dogovori preuzimanje sa vlasnikom.</p>
          </div>
          <div className="step">
            <h3>3. Iznajmi</h3>
            <p>Dodaj svoju opremu i zaradi dok je ne koristiš.</p>
          </div>
        </div>
      </section>

      {/* Sekcija 3: Poziv na akciju */}
      <section className="join-section">
        <h2>Pridruži se GearShare zajednici!</h2>
        <Link to="login" className="join-btn">Prijavi se</Link>
      </section>
    </main>
  )
}

export default WelcomeMain