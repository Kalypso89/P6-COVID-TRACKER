import React, { useEffect, useRef } from "react"
import DataTables from "datatables.net";
import $ from 'jquery'
import './tracker2Organism.css'

async function getDatacovid () {
    const config = {headers: {Accept: 'application/json'}}  
    const getData = await fetch('https://disease.sh/v3/covid-19/countries', config)
    const content = await getData.json(); 
    
    var datacovid = [];
    
    for(let i = 0; i < content.length; i++){
        const tableContent = ['<img src='+ content[i].countryInfo.flag +' height="20">', content[i].country, content[i].cases, content[i].todayCases,
        content[i].deaths, content[i].todayDeaths, content[i].recovered, content[i].active, content[i].critical, content[i].tests]
        datacovid.push(tableContent);
    }

    return datacovid
}

export function Tracker2Organism() {
 
$.DataTable = DataTables.DataTable;
const tableRef = useRef()
 
useEffect(() => {

    let table

    getDatacovid().then(datacovid => {
        table = $(tableRef.current).DataTable(
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
                destroy: true 
            }
        )
    })
    return function() {
        table && table.destroy()
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