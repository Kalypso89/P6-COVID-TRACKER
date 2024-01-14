import "./tracker1Page.css"
import { Tracker0Organism } from "../../organism/tracker0Organism/Tracker0Organism";
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule";
import { Tracker1Organism } from "../../organism/tracker1Organism/Tracker1Organism";

export function Tracker1Page() {
  return (
    <>
      <div className="tracker1_page">
        <NavbarMolecule></NavbarMolecule>
        <Tracker0Organism></Tracker0Organism>
        <Tracker1Organism></Tracker1Organism>
      </div>
    </>
  );
}