//Animals.js
import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import AnimalFilters from "./AnimalFilters";
import NavBar from "./NavBar";

const Animals = () => {
  // console.log("Props received in Animals.js", animals);
  const [animals, setAnimals] = useState([]);
  //filtereddAnimals -will store the filtered list of animals user selects
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  //fetch data
  useEffect(() => {
    fetch("http://localhost:5000/animals")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data in Animals:", data);  
        setAnimals(data);
        setFilteredAnimals(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="animals">
      <h1>Meet Our Animals!</h1>
      <h2>
        The Peekaboo Zoo & Aquarium is home to over 8,000 animals representing over 600 species. Learn more about some of our popular residents now.
      </h2>
      <h2>
        MORE ANIMALS COMING TO OUR ONLINE LIST SOON!
        Select a filter below to meet our cherished residents:
      </h2>
      
      <AnimalFilters animals={animals} setFilteredAnimals={setFilteredAnimals} />
      
      <div className="animals-grid">
        {filteredAnimals.length === 0 ? (
          <p>No animals match your filters.</p> 
        ) : (filteredAnimals.map((animal) => <AnimalCard key={animal.id} animal={animal} />)
        )}
      </div>
  </div>
  );
};

export default Animals;




  //typeFilter - will store the animal type filter selected by the user
  // const [typeFilter, setTypeFilter] = useState("");
  //will store the animal location filter selected by the user
  // const [locationFilter, setLocationFilter] = useState("");
  //animalDetails - will stores the details of the animal the user clicks
  // const [animalDetails, setAnimalDetails] = useState([]);