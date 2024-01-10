import React from 'react'
import "./tracker3Organism.css";

export function Tracker3Organism () {
  return (
    <div className="tracker3_organism">
        <p className="tracker_title_text">Top 10 Country wise Covid-19 Update - Tiles</p>
     
     <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">top cases</div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">today cases</div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">today deaths</div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">today deaths</div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">top active</div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-auto">top recover</div>
    </div>
    
   </div>

  )
};