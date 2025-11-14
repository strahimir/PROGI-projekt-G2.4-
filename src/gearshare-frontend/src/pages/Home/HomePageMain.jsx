import { Link } from 'react-router'
import '../../index.css'
import '../../assets/styles/welcomePage.css'
import campingImg from '../../assets/images/categories/camping.jpg'
import hikingImg from '../../assets/images/categories/hiking.jpg'
import SkiiImg from '../../assets/images/categories/skiing.jpg'
import DiveImg from '../../assets/images/categories/diving.jpg'
import BikeImg from '../../assets/images/categories/biking.jpg'
import SupImg from '../../assets/images/categories/sup.jpg'
import GuideCarousel from '../../Components/GuideCarousel'
import TopCategories from '../../Components/TopCategories'
import CuratedContent from './CuratedContent'

function WelcomeMain() {
  return (
    <main className="welcome-main">
    <CuratedContent></CuratedContent>

      {/* Sekcija 1: Najprodavanije kategorije */}
    
    <TopCategories></TopCategories>

      {/* Sekcija 2: Kako funkcionira GearShare */}

      <GuideCarousel />
      
    </main>
  )
}

export default WelcomeMain