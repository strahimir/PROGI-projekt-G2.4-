

function CuratedContent(){

    return(
       <div className="curated-content">
            <div className="recently-viewed">
                <h2>Nedavno gledani oglasi</h2>
                <div className="recently-viewed-container">
                    Ovdje će se prikazivati oglasi koje ste nedavno pregledavali...
                </div>
            </div>
            <div className="for-you">
                <h2>Moglo bi Vas zanimati</h2>
                <div className="recently-viewed-container">
                    Ovdje će se prikazivati najnoviji oglasi iz kategorija koje ste najčešće pregledavali...
                </div>
            </div>
       </div>
    )
}

export default CuratedContent