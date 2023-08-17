import "../styles/Selector.css";
import React from "react";

export default function Selector({ onChange, options, name }) {
  return (
    <select className="selectors" name={name} onChange={onChange && onChange}>
      {/* Mapear las opciones y generar elementos de opción (<option>) en función de los datos proporcionados */}
      {options &&
        options.map((option, index) => (
          <option
            key={index}
            value={option.value ? option.value : option.name}
            disabled={option.disabled || false} // Agregar el atributo disabled si la opción está deshabilitada
          >
            {option.name}
          </option>
        ))}
    </select>
  );
}
