import React from 'react'
import "./tracker3Organism.css";
import { CardTopTodayCountryCasesTracker03Atom } from '../../atoms/cardTopTodayCountryCasesTracker03/CardTopTodayCountryCasesTracker03Atom';

export function Tracker3Organism () {
  return (
    <div className="tracker3_organism">
        <h1 className="tracker_title_text">Top 10 Country wise Covid-19 Update - Tiles</h1>
        <br></br>
     <div className="row">
       <div className="col-xl-2 col-lg-4 col-md-6 col-auto"> 
          <h4 >Top Cases</h4>
          <div> 
            <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-6 col-auto">
          <h4 >Today Cases</h4>
          <div> 
           <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-6 col-auto">
          <h4 >Today Deaths</h4>
          <div> 
           <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-6 col-auto">
          <h4 >Today Deaths</h4>
          <div> 
           <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>

          <div className="col-xl-2 col-lg-4 col-md-6 col-auto">
          <h4 >Top Active</h4>
          <div> 
           <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>
        
        <div className="col-xl-2 col-lg-4 col-md-6 col-auto">
          <h4 >Today Recover</h4>
          <div> 
           <CardTopTodayCountryCasesTracker03Atom/>
          </div>
        </div>
    </div>
    
   </div>

  )
};