import { useState, useEffect } from "react";
import { API_URL } from "../configuration/config";

export function useTotalStatistics () {
    const [totalStatistics, setTotalStatistics] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}all`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(json => {
                const dataStatistics = [
                    {
                        title: "Total Case",
                        today: json.todayCases,
                        total: json.cases
                    },
                    {
                        title: "Active Case",
                        today: null,
                        value: json.active
                    },
                    {
                        title: "Recovered Case",
                        today: json.todayRecovered,
                        total: json.recovered
                    },
                    {
                        title: "Deaths Case",
                        today: json.todayDeaths,
                        total: json.deaths
                    }
                ];
                setTotalStatistics(dataStatistics);
            })
    }, [setTotalStatistics]);

    return totalStatistics;
}
