import "./news.css";
import useNews from "../../../hooks/useNews";

export const News = () => {
  const {data, loading} = useNews();

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <section className='background-image'>
      <h1 className="fs-6">News</h1>
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
                <p className='detailsContent__subtitle text-body-tertiary'><span className='mdi mdi-timer-outline'></span> {formatDate(item.newsDate)} <span className=' mdi mdi-comment-outline'></span> {item.comments} comments</p>
                <h4><a href={item.link.url}>{item.link.text}</a></h4>
                <p><a className="link-primary" href={item.link.url}>Continue</a></p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

