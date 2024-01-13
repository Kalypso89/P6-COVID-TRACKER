 import { useState, useEffect } from "react";
 import { API_URL } from "../configuration/config";
 
 export function useApi() {
    const [data,setData] = useState([]);

    useEffect((sortBy) => {
        const myEndpoint = `${API_URL}countries${sortBy}`;
        fetch(myEndpoint)
        .then(response => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then (data => {
        setData(data)
        })
        .catch (error => {console.error('Error data', error);
    },[setData]);
return data;
}

// console.log(data[1]);
// console.log(`top cases ${data[1].cases}`);
// console.log(`today cases ${data[1].todayCases}`);
// console.log(`top deaths ${data[1].deaths}`);
// console.log(` today deaths ${data[1].todayDeaths}`);
// console.log(`top active ${data[1].active}`);
// console.log(`top recovered ${data[1].recovered}`);