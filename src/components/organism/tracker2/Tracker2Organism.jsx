import React, { useEffect, useRef } from "react"
import DataTables from "datatables.net";
import $ from 'jquery'
import './tracker2Organism.css'
 
export function Tabla(props) {
 
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
                { title: "TodayCases"},
                { title: "Deaths"},
                { title: "TodayDeaths"},
                { title: "Recovered"},
                { title: "Active"},
                { title: "Critical"},
                { title: "Tests"}
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
            <table className="display" width="100%" ref={ tableRef }></table>
        </div>
         
    )
}
