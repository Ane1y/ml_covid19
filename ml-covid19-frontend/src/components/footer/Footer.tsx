import React from "react";
import "./footer.scss"
import logo from "../../images/covid-19_Icon.png";

function Footer() {

    return (
        <div className="footer">
            <div className="footer-background-image">
                <div className="footer-content-wrapper">
                    <div className="footer-content">
                        <img className="footer-logo"
                             src={logo}
                             alt="logo"/>
                        <div className="footer-title">
                            <div className="footer-text-lower footer-text-upper">We love our users!</div>
                            <div className="footer-text-main">Covid-19</div>
                            <div className="footer-text-lower">We love our users!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
