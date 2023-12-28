import { Tabla } from "../../organism/tracker2/Tracker2Organism"
import './tracker2Page.css'

const a = {headers: {Accept: 'application/json'}}  
const b = await fetch('https://disease.sh/v3/covid-19/countries', a)
const c = await b.json(); 

var datacovid = [];

for(let i = 0; i < c.length; i++){
    const gato = ['<img src='+ c[i].countryInfo.flag +'>', c[i].country, c[i].cases, c[i].todayCases,
    c[i].deaths, c[i].todayDeaths, c[i].recovered, c[i].active, c[i].critical, c[i].tests]
    datacovid.push(gato);
}

export function Tracker2Page() {
    return (
        <>  <div id="titletable">Ajax Data Table - Covid-19 Country Wise State</div>
            <hr id="hrr" />
            <div>
                <Tabla data={datacovid} />
            </div>
        </>
    )
}

