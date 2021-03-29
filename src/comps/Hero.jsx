import React from 'react'

export function Hero() {
    return (
        <div className="hero-container">
            <img className="hero-img" src={require('../assets/imgs/homepage/hero-bg-desktop.jpg').default} alt="hero" />
            <div className="hero main-container">
            <img className="dine-logo" src={require('../assets/imgs/logo.svg').default} alt="logo" />
            <div className="exquisite">
                    <div className="exquisite-title">Exquisite dining since 1989</div>
                    <div className="exquisite-text">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</div>
                    <div className="book-a-table-btn">book a table</div>
                </div>
            </div>
        </div>
    )
}