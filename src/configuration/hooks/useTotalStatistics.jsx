import { useState, useEffect } from "react"
import API_URL from "config.js"

export function useTotalStatistics () {
    const [totalStatistics, setTotalStatistics] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}all`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(json => {
                setTotalStatistics(json.data.slice(0,4))
            })
    }, [setTotalStatistics]);

    return totalStatistics;
}

