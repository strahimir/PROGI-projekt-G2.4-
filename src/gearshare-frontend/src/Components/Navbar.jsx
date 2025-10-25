import Category from "./Category"
import '../index.css'


function Navbar() {

    // kategorije - ZIMSKI / LJETNI / OSTALO
    const gearCategories = ['ZIMSKA', 'LJETNA', 'OSTALA']

    // fetch na backend svu opremu (?) 

    const displayCategories = gearCategories.map(
        (gearCategory) => <Category key={gearCategory} gearCategory={gearCategory} />)

    
    return (
        <nav className="catalog">
            { displayCategories }
        </nav>
    )
}

export default Navbar