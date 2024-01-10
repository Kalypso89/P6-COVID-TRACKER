import { useState, useEffect } from 'react';

const useNews = () => {
    // Estado para almacenar los datos obtenidos de la API
    const [data, setData] = useState([]);
    // Estado para indicar si la llamada a la API está en curso
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const config = { headers: { Accept: 'application/json' } };
          const endpointResponse = await fetch("https://disease.sh/v3/covid-19/therapeutics", config);
  
          if (!endpointResponse.ok || endpointResponse.status !== 200) {
            // El Endpoint no devuelve 200 (ok), ha dado un error
            setData([
              { key: 1, "image": "https://covimap.dexignzone.com/xhtml/images/blog-1.jpg", "newsDate": new Date(2020, 8, 9), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "What should I do if I have COVID-19 symptoms" }, comments: 2 },
              { key: 2, "image": "https://covimap.dexignzone.com/xhtml/images/blog-3.jpg", "newsDate": new Date(2020, 8, 8), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "What you need to know About Coronavirus" }, comments: 20 },
              { key: 3, "image": "https://covimap.dexignzone.com/xhtml/images/blog-2.jpg", "newsDate": new Date(2020, 8, 7), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "Seek immediate care if you have difficulty breathing" }, comments: 2 },
              { key: 4, "image": "https://covimap.dexignzone.com/xhtml/images/blog-3.jpg", "newsDate": new Date(2020, 8, 8), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "What you need to know About Coronavirus" }, comments: 20 },
              { key: 5, "image": "https://covimap.dexignzone.com/xhtml/images/blog-2.jpg", "newsDate": new Date(2020, 8, 7), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "Seek immediate care if you have difficulty breathing" }, comments: 2 }
            ]);
          } else {
            const jsonData = await endpointResponse.json();
            setData(jsonData);
          }
  
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [])

    return {data, loading};
};
export default useNews;
