import { Tracker0Organism } from "../../organism/tracker0Organism/Tracker0Organism";
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule"
import './tracker3Page.css'
import '../../molecules/navbar/navbarMolecule.css'

export function Tracker3Page() {
  return (
    <div className="tracker3_page">
      <NavbarMolecule></NavbarMolecule>
      <Tracker0Organism></Tracker0Organism>
      <h1>Éste es el componente Tracker3</h1>
    </div>
  );
}
