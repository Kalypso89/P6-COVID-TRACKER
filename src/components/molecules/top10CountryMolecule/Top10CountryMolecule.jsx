import { useTop10Country } from "../../../hooks/useTop10Country";
import { RowTop10CountryAtom } from "../../atoms/rowTop10CountryAtom/RowTop10CountryAtom";
import "./top10CountryMolecule.css"

export function Top10CountryMolecule() {
  const top10Country = useTop10Country();
  return (
    <section>
      <h4 className="top10_title">Top 10 Country</h4>
      <ul className="top10_container">
        {
            top10Country.map((row) => (
                <RowTop10CountryAtom 
                    key={row.country}
                    {...row}
                />
            ))
        }
      </ul>
    </section>
  )
}