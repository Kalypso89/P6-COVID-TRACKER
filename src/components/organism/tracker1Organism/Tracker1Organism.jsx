import React, { useState } from 'react';
import "./tracker1Organism.css"
import { SelectCountryTracker1Atom } from "../../atoms/selectCountryTracker1/SelectCountryTracker1Atom"
import { CardsCountryTracker1Molecule } from "../../molecules/cardsCountryTracker1/CardsCountryTracker1Molecule"
import { CardsTotalTracker1Molecule } from "../../molecules/cardsTotalTracker1/CardsTotalTracker1Molecule"


export const Tracker1Organism = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="container_organism_tracker1">
      <SelectCountryTracker1Atom onSelectCountry={handleSelectCountry} />
      <CardsCountryTracker1Molecule selectedCountry={selectedCountry} />
      <CardsTotalTracker1Molecule />
    </div>
  );
};
