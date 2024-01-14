import "./cardsCountryTracker1Molecule.css"
import { useFetch } from "../../../hooks/useFetch"
import { CardCountryStatisticsTracker1Atom } from "../../atoms/cardCountryStatisticsTracker1/CardCountryStatisticsTracker1Atom"

export const CardsCountryTracker1Molecule = ({ selectedCountry }) => {
    let endpoint = selectedCountry ? `countries/${selectedCountry}` : 'all'; 

    const data = useFetch(endpoint)
    const cases = data?.cases || 0;
    const death = data?.deaths || 0;
    const recovered = data?.recovered || 0;
    const active = data?.active || 0;
    const newCases = data?.todayCases || 0;
    const newDeaths = data?.todayDeaths || 0;

    return (
        <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
                <div className='content_cards_country_statistics'>
                    <CardCountryStatisticsTracker1Atom image="covid-defult" title="Total cases" value={cases} style={{ color: 'var(--blue-dark)'}}/>
                    <CardCountryStatisticsTracker1Atom image="covid-red" title="Total Deaths" value={death} style={{ color: 'var(--cherry)'}}/>
                    <CardCountryStatisticsTracker1Atom image="covid-green" title="Total Recovered" value={recovered} style={{ color: 'var(--green)'}}/>
                    <CardCountryStatisticsTracker1Atom image="covid-blue" title="Total Active" value={active} style={{ color: 'var(--blue)'}}/>
                    <CardCountryStatisticsTracker1Atom image="covid-orange" title="New Cases" value={newCases} style={{ color: 'var(--orange)'}}/>
                    <CardCountryStatisticsTracker1Atom image="covid-redark" title="New Deaths" value={newDeaths} style={{ color: 'var(--cherry)'}}/>

                </div>

            </div>
            <div className="col-lg-6 col-md-12 pe-0">
                <img className="covid_image_map" src="images\mapTracker1.png" alt="Covid World Map" />
            </div>
        </div>
    )
}

