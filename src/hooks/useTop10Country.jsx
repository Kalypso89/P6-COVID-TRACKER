import { useState, useEffect } from "react";
import { API_URL } from "../configuration/config";

export function useTop10Country () {
    const [top10Country, setTop10Country] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}countries?sort=cases`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(json => {
                const dataTop10Country = json.slice(0,10).map(countryData => ({                    
                    flag: countryData.countryInfo.flag,
                    country: countryData.country,
                    cases: countryData.cases
                }));
                
                setTop10Country(dataTop10Country);
            })
    }, [setTop10Country]);

    return top10Country;
}
