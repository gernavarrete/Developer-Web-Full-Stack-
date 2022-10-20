import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const myRef = useRef(null);

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos <= 0 ? reset() : segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
    if(myRef.current.value !== 0) {myRef.current.value = 0};
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

  function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  if(myRef.current.value >= 0) {
    let ref = myRef.current.value;
    setSegundos(ref)
  } else {
    myRef.current.value = 0;
    alert('El numero ingresado debe ser un numero positivo');
  }
}
  return (
    <div className="app">
      <div className="time">
        { segundos }s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && 
      <input 
      type="number"
      ref={myRef}
      onChange={agregaSegundos}
      placeholder="Ingresa Segundos"
      autoComplete="off"
      />};
    </div>
  );
};

export default Timer;
