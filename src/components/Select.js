import React from 'react';

const Select = ({ 
  options,
  valueKey = "id",
  titleKey = "name",
  allTitle = "All Airlines",
  onSelect,
  value = "all"
}) => {
  const handleChange = (e) => onSelect(e.target.value)
  
  return (
    <div>
      <label for="airlines">Filter by airline:</label>
      <select id="airlines" name="airlines" value={value} onChange={handleChange}>
        <option key="all" value="all">{allTitle}</option>
        {options.map(airline => {
          return (
            <option 
              key={airline[valueKey]}
              value={airline[valueKey]}
            >
              {airline[titleKey]}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
