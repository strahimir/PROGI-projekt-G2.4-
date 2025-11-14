import { useState } from "react";
import DisplayOptions from "./DisplayOptions";
import DisplayFilters from "./DisplayFilters";
import Listings from "./Listings";
import "../../assets/styles/catalog.css";

function CatalogMain() {
  const [listingsContainerStyle, setListingsContainerStyle] = useState("listings-grid");

  const changeListingsContainerStyle = () => {
    setListingsContainerStyle((prevStyle) =>
      prevStyle.slice(-4) === "grid" ? "listings-list" : "listings-grid"
    );
  };

  /*
    - mini header/container s opcijama:
    - prikaz lista vs grid
    - prikaži 20/50/100/200 artikala
    - razvrstaj po (abecedno, cijena, datum objave, datum isteka, reviews + ulazno/silazno)
    - dodaj filtere
  */

  return (
    <div className="catalog-main-container">
      <div className="filters-options-container">
        {/* ovo ne ispunjava cijelu širinu containera ?? */}
        <DisplayOptions changeListingsContainerStyle={changeListingsContainerStyle} />
        <DisplayFilters />
      </div>

      <div className="list-container">
        <Listings listingsContainerStyle={listingsContainerStyle} />
      </div>
    </div>
  );
}

export default CatalogMain;
