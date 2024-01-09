import { Tracker0Organism } from "../../organism/tracker0/Tracker0Organism"
import { Tracker2Organism } from "../../organism/tracker2/Tracker2Organism"
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule"
import './tracker2Page.css'

export function Tracker2Page() {
    return (
        <div className="tracker2_page">  
            <NavbarMolecule></NavbarMolecule>
            <Tracker0Organism></Tracker0Organism>
            <Tracker2Organism></Tracker2Organism>
        </div>
    )
}

