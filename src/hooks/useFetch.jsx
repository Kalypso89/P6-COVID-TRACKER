import { useState, useEffect } from "react";
import { API_URL } from "../configuration/config";

export function useFetch(endPoint) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const myEndpoint = `${API_URL}${endPoint}`;
      fetch(myEndpoint)
        .then(response => response.json())
        .then(apiData => {
          setData(apiData);
        })
        .catch(error => {
          console.error('Error al obtener datos', error);

        });
    }, [endPoint]);
  
    return data;
  }
