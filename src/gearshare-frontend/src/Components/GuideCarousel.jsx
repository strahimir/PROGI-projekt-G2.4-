
import '../index.css'
import '../assets/styles/welcomePage.css'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

function GuideCarousel() {

    const steps = [
        {
            instruction: "1. Pregledaj",
            explanation: "Pretraži dostupnu opremu prema kategoriji i lokaciji."
        },
        {
            instruction: "2. Unajmi",
            explanation: "Rezerviraj opremu i dogovori preuzimanje sa vlasnikom."
        },
        {
            instruction: "3. Iznajmi",
            explanation: "Dodaj svoju opremu i zaradi dok je ne koristiš."
        }
    ]

    const [step, setStep] = useState(0)


    const prevStep = () => {
        setStep(prev => (prev - 1 + steps.length) % steps.length)
    }

    const nextStep = () => {
        setStep(prev => (prev + 1 + steps.length) % steps.length)
    }


    return (
        <section className="how-it-works">
            <h2>Kako funkcionira GearShare?</h2>
            <div className="steps-container">
                <button onClick={prevStep}> <ChevronLeft size={20} /> </button>
                <div className="step">
                    <h3>{steps[step].instruction}</h3>
                    <p>{steps[step].explanation}</p>
                </div>
                <button onClick={nextStep}> <ChevronRight size={20} /> </button>
            </div>
        </section>
    )
}

export default GuideCarousel