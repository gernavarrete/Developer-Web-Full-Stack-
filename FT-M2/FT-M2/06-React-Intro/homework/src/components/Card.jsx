import React from 'react';
import Cards from './Cards';

export default function Card(props) {
  // acá va tu código
  console.log(props)
  const {img,max,min,name,onClose} = props;
  return <div id='card'>
          <button onClick={onClose}>X</button>
          <h3>{name}</h3>
          <div>
            <h5>Min</h5>
            <p>{min}</p>
          </div>
          <div>
            <h5>Max</h5>
            <p>{max}</p>
          </div>
          <div><img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/></div>
        </div>
};