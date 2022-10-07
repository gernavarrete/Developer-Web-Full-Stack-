import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(value) => {
      value.preventDefault();
      onSearch(value);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
