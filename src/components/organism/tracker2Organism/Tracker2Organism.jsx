import React, { useEffect, useRef } from "react"
import DataTables from "datatables.net";
import $ from 'jquery'
import './tracker2Organism.css'

const a = {headers: {Accept: 'application/json'}}  
const b = await fetch('https://disease.sh/v3/covid-19/countries', a)
const c = await b.json(); 

var datacovid = [];

for(let i = 0; i < c.length; i++){
    const gato = ['<img src='+ c[i].countryInfo.flag +' height="20">', c[i].country, c[i].cases, c[i].todayCases,
    c[i].deaths, c[i].todayDeaths, c[i].recovered, c[i].active, c[i].critical, c[i].tests]
    datacovid.push(gato);
}

export function Tracker2Organism(props) {
 
$.DataTable = DataTables.DataTable;
const tableRef = useRef()
 
useEffect(() => {
    console.log(tableRef.current)
    const table = $(tableRef.current).DataTable(
        {
            data: datacovid,
            columns: [
                { title: "Flag"},
                { title: "Country"},
                { title: "Cases"},
                { title: "New Cases"},
                { title: "Deaths"},
                { title: "New Deaths"},
                { title: "Recovered"},
                { title: "Active"},
                { title: "Critical"},
                { title: "Tested"}
            ],
            destroy: true  // I think some clean up is happening here
        }
    )
    // Extra step to do extra clean-up.
    return function() {
        console.log("Table destroyed")
        table.destroy()
    }
},[])
    return (
        <div>
            <div className="tabla_completa">
                <div id="titletable">Ajax Data Table - Covid-19 Country Wise State</div>
                <hr id="hrr" />
                <table className="display" width="100%" ref={ tableRef }></table>
            </div>
        </div>
         
    )
}
