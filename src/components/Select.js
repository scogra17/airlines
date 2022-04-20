import React, { useState } from 'react';
import { uniqueID } from '../utils';

const Select = ({ 
  options,
  valueKey = "id",
  titleKey = "name",
  allTitle = "All Airlines",
  onSelect,
  selected = null,
  value = "all"
}) => {
  const handleChange = (e) => {
    e.preventDefault()
    onSelect(e.target.value)
  }
  
  return (
    <div>
      <label for="airlines">Filter by airline:</label>
      <select id="airlines" name="airlines" value={value} onChange={handleChange}>
        <option key="all" value="all">{allTitle}</option>
        {options.map(airline => {
          return (
            <option 
              key={airline}
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
