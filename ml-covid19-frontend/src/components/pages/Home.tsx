import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkHome} from "../../store/reducers/navbarReducer";
import "./home.scss"

const Home: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkHome.id)
    }, [])

    return(
        <div className="home">
            Home
        </div>
    )
}

export default Home;
