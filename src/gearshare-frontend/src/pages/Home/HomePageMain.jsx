import { Link } from 'react-router'
import '../../index.css'
import '../../assets/styles/welcomePage.css'
import campingImg from '../../assets/images/categories/camping.jpg'
import hikingImg from '../../assets/images/categories/hiking.jpg'
import SkiiImg from '../../assets/images/categories/skiing.jpg'
import DiveImg from '../../assets/images/categories/diving.jpg'
import BikeImg from '../../assets/images/categories/biking.jpg'
import SupImg from '../../assets/images/categories/sup.jpg'


function WelcomeMain() {
  return (
    <main className="welcome-main">
      {/* Sekcija 1: Najprodavanije kategorije */}
      <section className="top-categories">
            <h2>Najprodavanije kategorije</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <img src={campingImg} alt="Kamp oprema" />
                    <p>Kamp oprema</p>
                </div>
                <div className="category-card">
                    <img src={hikingImg} alt="Planinarska oprema" />
                    <p>Planinarska oprema</p>
                </div>
                <div className="category-card">
                    <img src={SkiiImg} alt="Skijaška oprema" />
                    <p>Skijaška oprema</p>
                </div>
                <div className="category-card">
                    <img src={DiveImg} alt="Ronilačka oprema" />
                    <p>Ronilačka oprema</p>
                </div>
                <div className="category-card">
                    <img src={BikeImg} alt="Bicikli" />
                    <p>Bicikli</p>
                </div>
                <div className="category-card">
                    <img src={SupImg} alt="Sup daska" />
                    <p>Sup daska</p>
                </div>
            </div>
            <button className="more-btn">More categories</button>
            </section>


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

      
    </main>
  )
}

export default WelcomeMain