import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  let valueInput = 'London'
   
  return <div>
          <input type="text" placeholder='Ciudad...'/>
          <button onClick={()=> { onSearch(valueInput)} }>Agregar</button>
        </div>
};