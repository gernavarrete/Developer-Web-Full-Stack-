import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  let valueInput = 'London'
   
  return <div className={style.divContainer}>
          <input type="text" placeholder='Ciudad...'/>
          <button onClick={()=> { onSearch(valueInput)} } className={style.button} >Agregar</button>
        </div>
};