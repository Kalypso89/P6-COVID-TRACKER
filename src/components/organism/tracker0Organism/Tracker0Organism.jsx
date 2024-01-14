import { TotalStatisticsMolecule } from "../../molecules/totalStatisticsMolecule/TotalStatisticsMolecule";
import { Top10CountryMolecule } from "../../molecules/top10CountryMolecule/Top10CountryMolecule";
import "./tracker0Organism.css";

export function Tracker0Organism() {
    return (
      <aside className="tracker0_organism">
        <TotalStatisticsMolecule></TotalStatisticsMolecule>
        <Top10CountryMolecule></Top10CountryMolecule> 
      </aside>
    );
  }