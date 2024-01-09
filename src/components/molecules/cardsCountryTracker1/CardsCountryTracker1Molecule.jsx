import "./cardsCountryTracker1Molecule.css"
import {CardCountryStatisticsTracker1Atom} from "../../atoms/cardCountryStatisticsTracker1/cardCountryStatisticsTracker1Atom"

export const CardsCountryTracker1Molecule = () => {
  return (
    <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className='content_cards_country_statistics'>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    <CardCountryStatisticsTracker1Atom></CardCountryStatisticsTracker1Atom>
                    
                </div>


            </div>
            <div className="col-lg-6 col-md-12">
                <img className="covid_image_map" src="src\assets\images\mapTracker1.png" alt="Covid World Map" />
            </div>
        </div>
  )
}

