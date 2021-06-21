import React from "react";
import "./navbar.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {NavLink} from "react-router-dom";
import logo from '../../images/covid-19_Icon.png'

function Navbar() {
    const {links} = useTypedSelector(state => state.navbar)
    const {setPage} = useActions()

    return(
        <div className="navbar">
            <div className="navbar-wrapper">
                <NavLink to={links[0].page}
                         className="navbar-logo-wrapper">
                    <img onClick={() => setPage(links[0].id)}
                         alt={links[0].title}
                         src={logo}
                         className="navbar-logo"
                    />
                </NavLink>
                {links.slice(1).map(link =>
                    <button className={link.selected ? "navbar-button navbar-button-selected" : "navbar-button"}>
                        <NavLink to={link.page}
                                 className="navbar-text"
                                 onClick={() => setPage(link.id)}>
                            {link.title}
                        </NavLink>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar;
