import React from 'react'
import { Hero } from '../comps/Hero.jsx'
import { Highlights } from '../comps/Highlights.jsx'
import { Introduction } from '../comps/Introduction.jsx'
import { Slides } from '../comps/Slides.jsx'


export function Home() {
    return (
        <>
            <Hero />
            <Introduction />
            <Highlights />
            <Slides />
        </>
    )
}
