
import '../../index.css'
import '../../assets/styles/welcomePage.css'
import campingImg from '../../assets/images/categories/camping.jpg'
import hikingImg from '../../assets/images/categories/hiking.jpg'
import SkiiImg from '../../assets/images/categories/skiing.jpg'
import DiveImg from '../../assets/images/categories/diving.jpg'
import BikeImg from '../../assets/images/categories/biking.jpg'
import SupImg from '../../assets/images/categories/sup.jpg'

import { useState, useEffect } from "react"

function ImageBanner(){

    const images = [
        campingImg,
        hikingImg,
        SkiiImg,
        DiveImg,
        BikeImg,
        SupImg
    ]

    const [ image, setImage ] = useState(0);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setImage(prev => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(slideTimer)
    }, [images.length])

    const imageBanner = images.map((src, idx) => 
                <img key={idx} src={src} className='banner-image' />
                )


    return(
        <div className="banner-wrapper">
            <div className="banner-slider" style={{ transform: `translateX(-${image * 100}%)` }}>
                {
                    imageBanner
                }
            </div>
        </div>
    )
}

export default ImageBanner
