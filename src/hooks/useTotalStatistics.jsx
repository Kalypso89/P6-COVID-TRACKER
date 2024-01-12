import { useAPI } from "./useAPI";

const transformer = (data) => [
    {
        title: "Total Case",
        today: data.todayCases,
        total: data.cases,
        color: "#f00",
        backgroundColor: "#fff2f2"
    },
    {
        title: "Active Case",
        today: null,
        total: data.active,
        color: "#ff6a07",
        backgroundColor: "#fff9f1"
    },
    {
        title: "Recovered Case",
        today: data.todayRecovered,
        total: data.recovered,
        color: "#82c519",
        backgroundColor: "#edffec"
    },
    {
        title: "Deaths Case",
        today: data.todayDeaths,
        total: data.deaths,
        color: "#3639ae",
        backgroundColor: "#eefbff"
    }
];

export function useTotalStatistics () {
    return useAPI({ 
        endpoint: 'all',
        transformer,
        defaultValue: []
    });
}
