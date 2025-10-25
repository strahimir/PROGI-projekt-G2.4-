import { useState } from "react"
import DisplayOptions from "./DisplayOptions"
import DisplayFilters from "./DisplayFilters"
import Listings from "./Listings"
import '../../index.css'


function CatalogMain() {


    const [listingsContainerStyle, setListingsContainerStyle] = useState("listings-grid")


    const changeListingsContainerStyle = () => {
        setListingsContainerStyle((prevStyle) =>
            prevStyle.slice(-4) === 'grid' ? 'listings-list' : 'listings-grid'
        )
    }

    /*
    - mini header/container s opcijama:

    - prikaz lista vs grid
    
    - prikaži 20/50/100/200 atrikala
    - razvrstaj po (abecedno, cijena, datum objave, datum isteka, reviews + ulazno/silazno)
    - dodaj filtere
 
    */

    return (
        <div className="catalog-main-container">

            <div className="filters-options-container"> {/* ovo ne ispunja citavu sirinu containera ?? */}
                <DisplayOptions changeListingsContainerStyle={changeListingsContainerStyle} />
                <DisplayFilters />
            </div>

            <div className="list-container">
                <Listings listingsContainerStyle={listingsContainerStyle} />
            </div>
        </div>
    )
}

export default CatalogMain