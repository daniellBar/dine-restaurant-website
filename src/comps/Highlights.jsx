import React from 'react'
import {HighlightList} from './HighlightList.jsx'

export function Highlights() {

    const introText = 'We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.'

    return <section className="highlights-container">
        <div className="highlights main-container">
            <div className="highlights-intro">
                <h3 className="highlights-intro-title">A few highlights from our menu</h3>
                <div className="highlights-intro-text">{introText}</div>
            </div>
            <HighlightList />
        </div>
    </section>
}
