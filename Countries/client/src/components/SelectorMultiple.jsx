import React, { useState } from "react";

export default function SelectorMultiple({ onChange, options, name }) {
  // Estado para almacenar la opción sobre la que se encuentra el cursor
  const [hoveredOption, setHoveredOption] = useState(null);

  // Manejar el evento de mouse al entrar en una opción
  const handleMouseEnter = (event, value) => {
    setHoveredOption(value);
  };

  // Manejar el evento de mouse al salir de una opción
  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  return (
    <select
      multiple
      className="selectorsMultiple"
      name={name}
      onChange={onChange && onChange}
      value={options.map((option) => option.value)}
    >
      {options &&
        options.map((option, index) => (
          <option
            key={index}
            value={option.value ? option.value : option.name}
            onMouseEnter={(event) => handleMouseEnter(event, option.value)}
            onMouseLeave={handleMouseLeave}
            style={
              option.value === hoveredOption
                ? { backgroundColor: "#2ab595", color: "white" }
                : {}
            }
          >
            {option.name}
          </option>
        ))}
    </select>
  );
}
