import React from 'react';

const Select = ({ 
  options,
  enabledOptions,
  valueKey = "",
  titleKey = "",
  allTitle = "",
  onSelect,
  value = "",
  label = ""
}) => {
  const handleChange = (e) => onSelect(e.target.value)
  
  return (
    <div>
      <label for="airlines">{label}</label>
      <select id="airlines" name="airlines" value={value} onChange={handleChange}>
        <option key="all" value="all">{allTitle}</option>
        {options.map(option => {
          return (
            <option 
              key={option[valueKey]}
              value={option[valueKey]}
              disabled={!enabledOptions[option[valueKey]]}
            >
              {option[titleKey]}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
