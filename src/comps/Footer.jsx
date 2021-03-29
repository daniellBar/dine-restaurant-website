import React from "react";

export function Footer() {
    return (
        <footer >
            <div className="footer-top">
                <img className="footer-img" src={require('../assets/imgs/homepage/footer-bg-desktop.jpg').default} alt="footer-img" />
                <div className="footer-top-inner main-container">
                    <div className="make-a-reservation">
                        <div className="reservation-text">Ready to make a reservation?</div>
                        <div className="book-a-table-btn">book a table</div>
                    </div>
                </div>


            </div>
            <div className="footer-bottom main-container">
                <img className="dine-logo" src={require('../assets/imgs/logo.svg').default} alt="logo" />
                <div className="footer-info">
                    <div className="footer-location">Marthwaite, Sedbergh<br />Cumbria<br /> +00 44 123 4567</div>
                    <div className="footer-hours">Open Times<br />Mon - Fri: 09:00 AM - 10:00 PM<br />Sat - Sun: 09:00 AM - 11:30 PM</div>
                </div>
            </div>
        </footer>
    )
}