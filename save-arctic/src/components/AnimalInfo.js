import React, { useState, useEffect } from 'react';
import info from '../data/animals.json';


function AnimalInfo() {
   // react Hook For State Handler
   let [data, setData] = useState([]);
   let [selection, setSelection] = useState();
    return (
        <div className="infoSection">
          {
           info && info.map(
              function(data){
                      return (<div className="card" key="{data.id}"> 
                      <h4> {data.name}</h4>
                      <strong> Scientific Name: {data.scientificName}</strong>
                      <strong> Population: {data.population}</strong>
                      <p> {data.fact}</p>
                  </div>)
              }
            )
          }
        </div>
      );

}

export default AnimalInfo;