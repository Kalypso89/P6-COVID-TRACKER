import { useFetch } from "../hooks/useFetch"

export function useTop10Country () {
    const json = useFetch('countries?sort=cases');
    const dataTop10Country = json.slice(0,10).map(countryData => (
        {                    
            flag: countryData.countryInfo.flag,
            country: countryData.country,
            cases: countryData.cases
        }
    ));
    return dataTop10Country;
}
