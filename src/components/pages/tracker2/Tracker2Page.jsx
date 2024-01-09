import { Tracker2Organism } from "../../organism/tracker2/Tracker2Organism"
import { Tracker0Organism } from "../../organism/tracker0/Tracker0Organism"
import { NavbarMolecule } from "../../molecules/navbar/NavbarMolecule"
import './tracker2Page.css'

const a = {headers: {Accept: 'application/json'}}  
const b = await fetch('https://disease.sh/v3/covid-19/countries', a)
const c = await b.json(); 

var datacovid = [];

for(let i = 0; i < c.length; i++){
    const gato = ['<img src='+ c[i].countryInfo.flag +' height="20">', c[i].country, c[i].cases, c[i].todayCases,
    c[i].deaths, c[i].todayDeaths, c[i].recovered, c[i].active, c[i].critical, c[i].tests]
    datacovid.push(gato);
}

export function Tracker2Page() {
    return (
        <div className="tracker2_page">  
            <NavbarMolecule></NavbarMolecule>
            <Tracker0Organism></Tracker0Organism>
            <Tracker2Organism data={datacovid} />
        </div>
    )
}

