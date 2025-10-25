

function DisplayOptions({ changeListingsContainerStyle }) {

    return (
        <div className="display-options-container">
            {
                // prikaz kao resetka vs kao lista
                // WIP.
            }
            <div className="display-type"
                onClick={changeListingsContainerStyle}>
                prikaz list vs grid
            </div>
            <div className="display-count-containfer">
                <label htmlFor="displayCount">
                    Prikaži
                    <select name="displayCount" id="">
                        <option value="20" defaultChecked>20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                    </select>
                    oglasa
                </label>
            </div>
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

export default DisplayOptions