export function TotalStatistics() {
    const total_statistics = useTotalStatistics();
    return (
      <>
        <div>
          <h1>COVID-19 Tracker</h1>
          <div className="row_statistics">
                            {
                                total_statistics.slice(0, 3).map(({ title, variation, total }) => (
                                    <RowStatistics 
                                        title={titleAPI}
                                        variation={variationAPI}
                                        total={totalAPI}
                                    />
                                ))
                            }
          </div>
        </div>
      </>
    );
  }

  export function TestimonialsCards({opinion, user}) {
    return (
      <div className="testimonials__cards">
          <div className="testimonials__score">
              <i className="fa-solid fa-star"></i> 
              <i className="fa-solid fa-star"></i> 
              <i className="fa-solid fa-star"></i> 
              <i className="fa-solid fa-star"></i> 
              <i className="fa-solid fa-star"></i> 
          </div>
          <div className="testimonials__opinion">
              <p>{opinion}</p>
          </div>
          <div className="testimonials__user"> 
              <p><b>{user}</b></p>
          </div>
      </div>
    )
  }