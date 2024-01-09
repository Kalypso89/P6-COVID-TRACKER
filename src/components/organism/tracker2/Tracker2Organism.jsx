import React, { useEffect, useRef } from "react"
import DataTables from "datatables.net";
import $ from 'jquery'
import './tracker2Organism.css'
 
export function Tracker2Organism(props) {
 
$.DataTable = DataTables.DataTable;
const tableRef = useRef()
 
useEffect(() => {
    console.log(tableRef.current)
    const table = $(tableRef.current).DataTable(
        {
            data: props.data,
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
