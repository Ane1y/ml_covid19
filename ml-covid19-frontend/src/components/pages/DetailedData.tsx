import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkDetailedData} from "../../store/reducers/navbarReducer";
import "./detailedData.scss"

const DetailedData: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkDetailedData.id)
    }, [])

    return(
        <div className="detailed-data">
            Covid-19
        </div>
    )
}

export default DetailedData;
