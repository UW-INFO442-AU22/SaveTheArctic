import React, { useState, useEffect } from 'react';
import animalJson from "../data/animals.json";

const animalList = JSON.stringify(animalJson);
const data = JSON.parse(animalList);

function AnimalInfo() {
  const [animal, setAnimal] = useState(0);

  useEffect(() => {
    setAnimal;
  }, []);

  return (
  <div className="infoSection">
      <h4> {data[i].name}</h4>
      <strong> Scientific Name: {data[i].scientificName}</strong>
      <br></br>
      <strong> Population: {data[i].population}</strong>
      <br></br>
      <p> {data[i].fact}</p>
  </div>
  );
};

export default AnimalInfo;