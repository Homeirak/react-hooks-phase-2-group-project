//AnimalCard.js
import React, { useEffect } from "react";

function AnimalCard ({ animal }) {
    return (
        <div className="animal-card">
        <img src={animal.picture.src} alt={animal.picture.alt} className="animal-image" />
        <h3 className="animal-name">{animal.name}</h3>
      </div>
    );
  };
  
  export default AnimalCard;