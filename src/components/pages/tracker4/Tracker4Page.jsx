import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule";
import { Tracker0Organism } from "../../organism/tracker0Organism/Tracker0Organism";
import { Tracker4Organism } from "../../organism/tracker4Organism/Tracker4Organism"
import "./tracker4Page.css";

export function Tracker4Page() {
    return (
      <div className="tracker4_page">
        <NavbarMolecule></NavbarMolecule>
        <Tracker0Organism></Tracker0Organism>
        <Tracker4Organism></Tracker4Organism>
      </div>
    );
  }