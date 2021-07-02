import React from "react";
import "./navbar.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import logo from '../../images/covid-19_Icon.png'

function Navbar() {
    const {links} = useTypedSelector(state => state.navbar)

    return(
        <div className="navbar">
            <div className="navbar-wrapper"
                 key={links[0].id}>
                <NavLink to={links[0].page}
                         className="navbar-logo-wrapper">
                    <img alt={links[0].title}
                         src={logo}
                         className="navbar-logo"
                    />
                </NavLink>
                {links.slice(1).map(link =>
                    <button className={link.selected ? "navbar-button navbar-button-selected" : "navbar-button"}
                            key={link.id}>
                        <NavLink to={link.page}
                                 className="navbar-text">
                            {link.title}
                        </NavLink>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar;
