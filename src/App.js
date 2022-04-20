import React, { Component, useEffect, useState } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import { uniqueID } from './utils'

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => {
  switch (property) {
    case "airline":
      return getAirlineById(value)
    case "src":
      return getAirportByCode(value)
    default: 
      return value
  }
}

const App = () => {
  const [airlineFilter, setAirlineFilter] = useState(null)
  const [filteredAirlines, setFilteredAirlines] = useState(data.routes)

  const filterAirlines = () => {
    setFilteredAirlines(data.routes.filter(route => !airlineFilter || route.airline === Number(airlineFilter)))
  }

  useEffect(filterAirlines, [airlineFilter])

  const handleFilterByAirline = () => {
    const selectElement = document.querySelector('#airlines')
    setAirlineFilter(selectElement.value) 
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <p>
          Welcome to the app!
        </p>
      </section>
      <label for="airlines">Filter by airline:</label>
      <select id="airlines" name="airlines" onChange={handleFilterByAirline}>
        <option key={uniqueID()} value="">Show all</option>
        {data.airlines.map(airline => <option key={uniqueID()} value={airline.id} selected={airlineFilter && Number(airlineFilter) === airline.id}>{airline.name}</option>)}
      </select>
      <Table className="routes-table" columns={columns} rows={filteredAirlines} format={formatValue}/>
    </div>
  )
}

export default App;