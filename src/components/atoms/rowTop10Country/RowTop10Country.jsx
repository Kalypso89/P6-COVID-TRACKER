import "./rowTop10Country.css"

export function RowTop10Country({flag, country, cases}) {
  return (
    <div className="top10_row">
        <div className="top10_row_flag">
          <img src={flag}/>
        </div>
        <div className="top10_row_country">
          <p>{country}</p>
        </div>
        <div className="top10_row_cases">
          <p>{cases}</p>
        </div>
    </div>
  )
}