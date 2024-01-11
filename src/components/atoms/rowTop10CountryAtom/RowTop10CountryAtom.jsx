import "./rowTop10CountryAtom.css"

export function RowTop10CountryAtom({flag, country, cases}) {
  return (
    <li className="top10_row">
        <img src={flag} className="top10_row_flag"/>
        <h6 className="top10_row_country">{country}</h6>
        <span className="top10_row_cases">{cases}</span>
    </li>
  )
}