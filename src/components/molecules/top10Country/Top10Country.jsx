import { useTop10Country } from "../../../hooks/useTop10Country";
import { RowTop10Country } from "../../atoms/rowTop10Country/RowTop10Country";
import "./top10Country.css"

export function Top10Country() {
  const top10Country = useTop10Country();
  return (
    <section>
      <h4 className="top10_title">Top 10 Country</h4>
      <ul className="top10_container">
        {
            top10Country.map((row) => (
                <RowTop10Country 
                    key={row.country}
                    {...row}
                />
            ))
        }
      </ul>
    </section>
  )
}