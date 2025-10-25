import '../index.css'

function Listing() { // todo: add props 

    const dummyProduct = {
        img: './src/assets/images/placeholder_img.png',
        datePosted: 'MM/DD/YYYY',
        dateEnding: 'MM/DD/YYYY',
        title: 'title',
        price: 6767,
        seller: 'seller12345',
        rating: 49
    }

    return (
        <div className="listing-container">
            <div className="listing-image-container">
                <img className="listing-image"
                    src={dummyProduct.img} />
            </div>

            <div className="listing-title">
                {dummyProduct.title}
            </div>

            <div className="listing-seller-info">
                {dummyProduct.seller} ({(dummyProduct.rating / 10).toFixed(2)})
            </div>

            <div className="listing-period">
                {dummyProduct.datePosted} - {dummyProduct.dateEnding}
            </div>

            <div className="listing-price">
                {(dummyProduct.price / 100).toFixed(2)}€ po danu
            </div>
        </div>
    )
}

export default Listing