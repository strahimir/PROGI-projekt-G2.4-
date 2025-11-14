

function DisplayOptions({ changeListingsContainerStyle }) {
  return (
    <div className="display-options-container">
      {/* Gumb za mijenjanje prikaza */}
      <button
        onClick={changeListingsContainerStyle}
        className="toggle-view-btn"
      >
        Promijeni prikaz
      </button>

      {/* Broj artikala po stranici */}
      <label>
        Prikaži:
        <select defaultValue="20">
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </label>

       <div className="sort-by-container">
                <label>
                    Poredaj po:
                    <select name="sortCategory" id="">
                        <option value="price">cijeni</option>
                        <option value="datePosted" defaultChecked>datumu objave</option>
                        <option value="dateEnding">datumu isteka</option>
                        <option value="rating">ocjenama trgovca</option>
                    </select>
                    <select name="sortOrder" id="">
                        <option value="asc">uzlazno</option>
                        <option value="desc" defaultChecked>silazno</option>
                    </select>
                </label>
            </div>
        </div>
    )
}


export default DisplayOptions;
