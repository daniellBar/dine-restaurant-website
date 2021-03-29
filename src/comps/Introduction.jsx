import React from 'react'
import { InfoCard } from '../comps/InfoCard.jsx'

export function Introduction() {

    const cardsToRender = [{ className: 'enjoyable-place-info', title: 'Enjoyable place for all the family', text: 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.' },
    { className: 'locally-sourced-info', title: 'The most locally sourced food', text: 'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.' }]

    return (
        <div className="introduction-container">
            <div className="curve-top-right"></div>
            <div className="curve-top-left"></div>
            <div className="introduction main-container">
                <div className="introduction-inner-container">
                    <img className="enjoyable-place-img" src={require('../assets/imgs/homepage/enjoyable-place-desktop.jpg').default} alt="enjoyable-place" />
                    <img className="locally-sourced-img" src={require('../assets/imgs/homepage/locally-sourced-desktop.jpg').default} alt="locally-sourced" />
                    <img className="pattern-lines" src={require('../assets/imgs/patterns/pattern-lines.svg').default} alt="pattern-lines" />
                    {
                        cardsToRender.map((card, idx) =>
                            <div key={idx} className={card.className}>
                                <img className="pattern-divide" src={require('../assets/imgs/patterns/pattern-divide.svg').default} alt="pattern-divide" />
                                <InfoCard title={card.title} text={card.text} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


