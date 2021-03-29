import React, { Component } from 'react'
import { InfoCard } from './InfoCard.jsx'


const slides =
    [
        { title: 'Family Gathering', text: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.', imgUrl: require('../assets/imgs/homepage/family-gathering-desktop.jpg').default },
        { title: 'Special Events', text: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.', imgUrl: require('../assets/imgs/homepage/special-events-desktop.jpg').default },
        { title: 'Social Events', text: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.', imgUrl: require('../assets/imgs/homepage/social-events-desktop.jpg').default }
    ]

export class Slides extends Component {

    state = {
        slide: null
    }

    componentDidMount() {
        this.loadSlide()
    }

    loadSlide = () => {
        this.setSlide('Family Gathering')
    }

    setSlide = (slideTitle) => {
        const slide = slides.find(slide => slide.title === slideTitle)
        this.setState({ slide: slide })
    }


    render() {
        const navs = ['Family Gathering', 'Special Events', 'Social Events']
        const { slide } = this.state || slides[0]
        if (!slide) return <div></div>
        return (
            < div className="slide-container" >
                <div className="curve-top-right"></div>
                <div className="slide main-container">
                    <div className="slide-inner-container">
                        <img className="pattern-lines" src={require('../assets/imgs/patterns/pattern-lines.svg').default} alt="pattern-lines" />
                        <div className="slide-img">
                            <img src={slide.imgUrl} alt="slide-img" />
                        </div>
                        <div className="slide-content">
                            <InfoCard title={slide.title} text={slide.text} />
                            <div className="book-a-table-btn">Book a table</div>
                            <div className="slides-navs">
                                {navs.map((nav, idx) => <div className={`nav${slide.title === nav ? ' active' : ''}`} key={idx} onClick={() => this.setSlide(nav)}>
                                    <div className="nav-title">{nav}</div>
                                    {slide.title === nav && <div className="stick"></div>}
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}
