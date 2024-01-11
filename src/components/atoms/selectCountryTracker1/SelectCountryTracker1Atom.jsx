import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch"
import "./selectCountryTracker1Atom.css"



export const SelectCountryTracker1Atom = ({ onSelectCountry }) => {

    const data = useFetch("countries")
    
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCountry(selectedValue);
        onSelectCountry(selectedValue);
    };

    if (!data.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="row title_select">
            <div className="content_select_country col-lg-3 col-md-12 px-0">
                <select
                    className="form-select form-select-lg mb-3"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">Select a country</option>
                    {data.map((country, index) => (
                        <option key={index} value={country.country}>
                            {country.country}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-lg-9 text-lg-end text-center content_date pe-0">
                <p>Updated: January 31, 2022</p>
            </div>
        </div>
    );
};