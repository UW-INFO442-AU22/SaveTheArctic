import React, { useState, useEffect } from 'react';
import animalJson from "../data/animals.json";


function AnimalInfo() {
  const animalList = JSON.stringify(animalJson);
  const data = JSON.parse(animalList);

  const [animal, setAnimal] = useState(data);
  const [random, setRandom] = useState(Math.floor(Math.random() * 9));

  return (
  <div className="infoSection">
      <img className="animal-photo" src= {`../img/${animal[random].image}`} alt="Animal photo"/>
      <h4>{animal[random].name}</h4>
      <br></br>
      <p><strong> Scientific Name:</strong> {animal[random].scientificName}</p>
      <br></br>
      <p><strong> Population:</strong> {animal[random].population}</p>
      <br></br>
      <p> {animal[random].fact}</p>
  </div>
  );
};

export default AnimalInfo;