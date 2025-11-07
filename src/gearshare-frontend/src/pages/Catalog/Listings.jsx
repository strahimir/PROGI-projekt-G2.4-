import Listing from '../../Components/Listing'

function Listings({ listingsContainerStyle }) {

    const products = [{ id: 1 }] // dummy array

    // listing - grid vs list <- posalji ko prop

    const displayListings = products.map((product) => <Listing key={product.id} />)
    return (
        <div className={listingsContainerStyle}>
            {displayListings}
        </div>
    )
}
export default Listings