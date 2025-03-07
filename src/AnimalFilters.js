//AnimalFilters.js
import React, { useState, useEffect } from "react";

const AnimalFilters = ({ animals, setFilteredAnimals}) => {
    const [typeFilter, setTypeFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    // function which checks which filters the user has selected and updates/changes animals stored in filteredAnimals based on the user's selection
    const whichFilters = () => {
      if (!Array.isArray(animals)) {
        console.error("Animals data is not an array:", animals);
        setFilteredAnimals([]);
        return; // Stop execution if animals is not an array
      }

      let selections = [...animals];
      if (typeFilter !== "") {
        selections = selections.filter((animal) => 
          animal.type.toLowerCase() === typeFilter.toLowerCase()
      );
      } 
      if (locationFilter !== "") {
        selections = selections.filter((animal) => animal.location === locationFilter); 
      }
      setFilteredAnimals(selections);
    };
  
  useEffect(() => {
    if (Array.isArray(animals)){
      whichFilters();
    }
  }, [typeFilter, locationFilter, animals]);


  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  }; 
   
  return (
    <div>
      <div className="filter-container">
        <select className="filter-dropdown" value={typeFilter} onChange={handleTypeChange}>
          <option value="">Type</option>
          <option value="Mammal">Mammal</option>
          <option value="Bird">Bird</option>
          <option value="Fish">Fish</option>
          <option value="Reptile">Reptile</option>
          <option value="Insect">Insect</option>
        </select>

        <select className="filter-dropdown" value={locationFilter} onChange={handleLocationChange}>
          <option value="">Location</option>
          <option value="The Safari Adventure">The Safari Adventure</option>
          <option value="The Polar Frontier">The Polar Frontier</option>
          <option value="The Tropical Rainforest">The Tropical Rainforest</option>
          <option value="The Butterfly Garden">The Butterfly Garden</option>
          <option value="The Ocean Odyssey">The Ocean Odyssey</option>
          <option value="The Bird Sanctuary">The Bird Sanctuary</option>
        </select>
      </div>
    </div>
  )
};

export default AnimalFilters;
