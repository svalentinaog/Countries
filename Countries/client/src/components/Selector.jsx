import "../styles/Selector.css";
import React from "react";

export default function Selector({ onChange, options, name }) {
  return (
    <select className="selectors" name={name} onChange={onChange && onChange}>
      {options &&
        options.map((option, index) => (
          <option
            key={index}
            value={option.value ? option.value : option.name}
            disabled={option.disabled || false} 
          >
            {option.name}
          </option>
        ))}
    </select>
  );
}
