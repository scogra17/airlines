import React, { useEffect, useState } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Select from './components/Select';

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
  const [airlineFilter, setAirlineFilter] = useState("all")
  const [filteredAirlines, setFilteredAirlines] = useState(data.routes)

  const filterAirlines = () => {
    setFilteredAirlines(data.routes.filter(route => airlineFilter === "all" || route.airline === Number(airlineFilter)))
  }

  useEffect(filterAirlines, [airlineFilter])

  const handleFilterByAirline = (airline) => {
    setAirlineFilter(airline) 
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
      <Select options={data.airlines} onSelect={handleFilterByAirline} value={airlineFilter}/>
      <Table className="routes-table" columns={columns} rows={filteredAirlines} format={formatValue}/>
    </div>
  )
}

export default App;