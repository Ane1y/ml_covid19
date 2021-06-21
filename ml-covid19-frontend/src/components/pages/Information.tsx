import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkInformation} from "../../store/reducers/navbarReducer";
import "./information.scss"

const Information: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkInformation.id)
    }, [])

    return(
        <div className="information">
            Информация
        </div>
    )
}

export default Information;
