import React from 'react';
import "./cardTopTodayCountryCasesTracker03Atom.css";

export function CardTopTodayCountryCasesTracker03Atom (props) {
  return (
<>
    <div className="top_today_card" id="top-today-card">
      <img src={props.flag} className="flag" id="flag"/>
     <div>
        <div className="country_name">{props.country}</div>
        <div className="country_num">{props.value}</div>
     </div>
    </div>

    <div className="top_today_card" id="top-today-card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vigo_bandera_2.png/640px-Vigo_bandera_2.png" className="flag" id="flag"/>
      <div> 
        <div>USA</div>
        <div>86503057</div>
      </div>
    </div>

    <div className="top_today_card" id="top-today-card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vigo_bandera_2.png/640px-Vigo_bandera_2.png" className="flag" id="flag"/>
      <div> 
        <div>Country</div>
        <div>numbers</div>
      </div>
    </div>

</>
  );
};

