import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkData} from "../../store/reducers/navbarReducer";
import "./data.scss"

const Data: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkData.id)
    }, [])

    return(
        <div className="data">
            Оперативные данные
        </div>
    )
}

export default Data;
