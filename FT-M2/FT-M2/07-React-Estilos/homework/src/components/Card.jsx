import React from 'react';
import Cards from './Cards.jsx';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  const {img,max,min,name,onClose} = props;
  return <div className={s.div}>
            <button onClick={onClose} className={s.button}>X</button>
            <h3>{name}</h3>
            <div className={s.divTempContainer}>
              <div className={s.divTemp}>
                <h5>Min</h5>
                <p>{min}</p>
              </div>
              <div className={s.divTemp}>
                <h5>Max</h5>
                <p>{max}</p>
              </div>
              <div><img src={`http://openweathermap.org/img/wn/${img}@2x.png`}  className={s.styleImg}/></div>
            </div>
          </div>
};