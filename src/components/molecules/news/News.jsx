import "./news.css"
import React, { useState, useEffect } from 'react';

const News = () => {
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
            { key: 3, "image": "https://covimap.dexignzone.com/xhtml/images/blog-2.jpg", "newsDate": new Date(2020, 8, 7), "link": { "url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "Seek immediate care if you have difficulty breathing" }, comments: 2 }
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
  }, []); // El segundo argumento vacío [] indica que useEffect se ejecutará solo una vez al montar el componente

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <section className='background-image'>
      <h1>Latest News About</h1>
      <h1>Corona Virus</h1>
      <div className="card-group">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <div key={item.key} className="card my-2 mx-2 my-card">
              <img src={`${item.image}`} style={{ marginLeft:'40px', width: '370px' }} alt="" />
              <div className="card-body" style={{ width: '370px' }}>
                <p className='detailsContent__subtitle'><span className='mdi mdi-timer-outline'></span> {formatDate(item.newsDate)} <span className=' mdi mdi-comment-outline'></span> {item.comments} comments</p>
                <h4><a href={item.link.url}>{item.link.text}</a></h4>
                <p><a href={item.link.url}>Continue</a></p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default News;
