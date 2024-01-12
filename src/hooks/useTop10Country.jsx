import { useAPI } from "./useAPI";

const transformer = (data) => {
    const dataTop10Country = data.slice(0,10).map(countryData => ({                    
        flag: countryData.countryInfo.flag,
        country: countryData.country,
        cases: countryData.cases
    }));
    return dataTop10Country;
};

export function useTop10Country () {
    return useAPI({ 
        endpoint: 'countries?sort=cases',
        transformer,
        defaultValue: []
    });
}