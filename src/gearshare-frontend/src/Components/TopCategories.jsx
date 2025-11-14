import { useState } from 'react'
import '../index.css'
import '../assets/styles/welcomePage.css'
import { Link } from 'react-router'
import campingImg from '../assets/images/categories/camping.jpg'
import hikingImg from '../assets/images/categories/hiking.jpg'
import SkiiImg from '../assets/images/categories/skiing.jpg'
import DiveImg from '../assets/images/categories/diving.jpg'
import BikeImg from '../assets/images/categories/biking.jpg'
import SupImg from '../assets/images/categories/sup.jpg'

function TopCategories() {

    return (
        <section className="top-categories">
            <h2>Najprodavanije kategorije</h2>
            <div className="categories-grid">
                <div className="category-card">
                    <img src={campingImg} alt="Kamp oprema" />
                    <p>Kamp oprema</p>
                </div>
                <div className="category-card">
                    <img src={hikingImg} alt="Planinarska oprema" />
                    <p>Planinarska oprema</p>
                </div>
                <div className="category-card">
                    <img src={SkiiImg} alt="Skijaška oprema" />
                    <p>Skijaška oprema</p>
                </div>
                <div className="category-card">
                    <img src={DiveImg} alt="Ronilačka oprema" />
                    <p>Ronilačka oprema</p>
                </div>
                <div className="category-card">
                    <img src={BikeImg} alt="Bicikli" />
                    <p>Bicikli</p>
                </div>
                <div className="category-card">
                    <img src={SupImg} alt="Sup daska" />
                    <p>Sup daska</p>
                </div>
            </div>
            <button className="more-btn" >
                    More categories
            </button>
        </section>
    )
}

export default TopCategories