import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
          {
            cities.map(c => {
              return <Card 
                    name={c.name} 
                    min={c.main.temp_min} 
                    max={c.main.temp_max} 
                    img={c.weather[0].icon} 
                    onClose={() => alert(c.name)}
                    key={c.id}/>
            }) 
          }
        </div>
};