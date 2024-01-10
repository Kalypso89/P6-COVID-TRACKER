import "./tracker1Organism.css"
import { SelectCountryTracker1Atom } from "../../atoms/selectCountryTracker1/SelectCountryTracker1Atom"
import { CardsCountryTracker1Molecule } from "../../molecules/cardsCountryTracker1/CardsCountryTracker1Molecule"
import { CardsTotalTracker1Molecule } from "../../molecules/cardsTotalTracker1/CardsTotalTracker1Molecule"


export const Tracker1Organism = () => {
  return (
    <div className="container_organism_tracker1">
      <SelectCountryTracker1Atom></SelectCountryTracker1Atom>
      <CardsCountryTracker1Molecule></CardsCountryTracker1Molecule>
      <CardsTotalTracker1Molecule></CardsTotalTracker1Molecule>


    </div>

  )
}
