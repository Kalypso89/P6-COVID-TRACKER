import "./cardsTotalTracker1Molecule.css"
import { useFetch } from "../../../hooks/useFetch"
import { CardTotalStatisticsTracker1Atom } from "../../atoms/cardTotalStatisticsTracker1/CardTotalStatisticsTracker1Atom"

export const CardsTotalTracker1Molecule = () => {

  const data = useFetch("all")

  return (
    
      <div className='row content_cards_total_statistics mt-4'>
        <CardTotalStatisticsTracker1Atom image="covid-defult" title="Total Confirmed" value={data.cases} />
        <CardTotalStatisticsTracker1Atom image="covid-green" title="Total Recovered" value={data.recovered} />
        <CardTotalStatisticsTracker1Atom image="covid-red" title="Total Deaths" value={data.deaths} />
        <CardTotalStatisticsTracker1Atom image="covid-redark" title="New Deaths" value={data.todayDeaths} />
        <CardTotalStatisticsTracker1Atom image="telephone" title="Help Line No." value="198" />

      </div>
    

  )
}

