import "./news.css"

function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
let data = [];
const config = {headers: {Accept: 'application/json'}};  
const endpointResponse = await fetch("https://disease.sh/v3/covid-19/therapeutics", config);
if(!endpointResponse.ok || endpointResponse.status !== 200){
    //El Endpoint no devuelve 200 (ok) No ha dado un error b.ok es falso
    data = [{key:1,"image":"https://covimap.dexignzone.com/xhtml/images/blog-1.jpg", "newsDate": new Date(2020,8,9),"link":{"url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "What should I do if I have COVID-19 symptoms" }, comments:2},{key:2,"image":"https://covimap.dexignzone.com/xhtml/images/blog-3.jpg", "newsDate": new Date(2020,8,8),"link":{"url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "What you need to know About Coronavirus" }, comments:20},{key:3,"image":"https://covimap.dexignzone.com/xhtml/images/blog-2.jpg", "newsDate": new Date(2020,8,7),"link":{"url": "https://covimap.dexignzone.com/xhtml/blog-single.html", "text": "Seek immediate care if you have diffculty breathing" }, comments:2}];
}
else{
    data = await endpointResponse.json();
    
}

export const News = () => {
  return (
    
<section className='background-image'>
    <h1>Lastest News</h1>
  
      
        {data ? (
          data.map((item) => (
            <section className="detailsContainer row">
                <div key={item.key} class="col-4">
                    <img src={`${item.image}`} height="125" alt="" />
                    <div className="detailsContent">
                        <h4><a href={item.link.url}>{item.link.text}</a></h4>
                        <p className='detailsContent__subtitle'>{formatDate(item.newsDate)}</p>
                        <p>{item.text}</p>
                    </div>
                </div>
            </section>
          ))
        ) : (
          <p>Loading...</p>
        )}
      
    </section>
  )}