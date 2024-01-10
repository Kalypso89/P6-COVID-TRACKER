import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule";
import { Tracker0Organism } from "../../organism/tracker0Organism/Tracker0Organism";
import { Tracker3Organism } from "../../organism/tracker3Organism/Tracker3Organism";
import "./tracker3Page.css";

export function Tracker3Page() {
    return (
      <div className="tracker3_page">
        <NavbarMolecule></NavbarMolecule>
        <Tracker0Organism></Tracker0Organism>
        <Tracker3Organism></Tracker3Organism>
      </div>
    );
  }