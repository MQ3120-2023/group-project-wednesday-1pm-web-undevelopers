import React from 'react';
import "../styling/CustomMultiSelect.css";

const CustomMultiSelect = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const newSelectedOptions = event.target.checked
      ? [...selectedOptions, value]
      : selectedOptions.filter(option => option !== value);
    onChange(newSelectedOptions);
  };

  return (
    <div className="multi-select-container">
      {options.map(option => (
        <label key={option.idIngredient} className="multi-select-option">
          <input
            type="checkbox"
            value={option.strIngredient}
            checked={selectedOptions.includes(option.strIngredient)}
            onChange={handleCheckboxChange}
          />
          {option.strIngredient}
        </label>
      ))}
    </div>
  );
};

export default CustomMultiSelect;
