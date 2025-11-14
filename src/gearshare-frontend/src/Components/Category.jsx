import '../index.css'

function Category({ gearCategory }) {

    const gearCategoryItems = [{ name: 'item1', id: 1 }, { name: 'item2', id: 2 }]

    const getGearSubcategoryItems = () => {
        // axios fetch tj. get rq na backend za opremu where sport = item.name
        // rerutiraj na /catalog/:gearsubcategory
        console.log('clicked')
    }

    const displayGearSubcategoryItems = 
                gearCategoryItems.map(item => {

                    return (
                        <p key={item.id}
                            onClick={getGearSubcategoryItems}>
                            {item.name}
                        </p>
                    )
                })
            

    return (
        <div className="gear-category">
            <h2 className="gear-category-name">{gearCategory} OPREMA</h2>
            <div className="gear-category-subcategories">
            {displayGearSubcategoryItems}
            </div>
            

        </div>
    )
}

export default Category