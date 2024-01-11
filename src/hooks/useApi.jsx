 import { useState, useEffect } from "react";
 import { API_URL } from "../configuration/config";
 
 export function useApi() {
    const [data,setData] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}countries?sort=cases`;
        fetch(myEndpoint)
        .then(response => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then (data => {
        setData(data)
        //   iria aqui el array o un olsole log para ver lo que hay
        console.log(data);
        console.log(data[1]);
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