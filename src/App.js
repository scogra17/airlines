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
    case "dest":
    case "src":
      return getAirportByCode(value)
    default: 
      return value
  }
}

const App = () => {
  const [airlineFilter, setAirlineFilter] = useState("all")
  const [airportFilter, setAirportFilter] = useState("all")
  const [filteredAirlines, setFilteredAirlines] = useState(data.routes)

  const filterRoutes = () => {
    const filteredRoutes = data.routes.filter(route => {
      return (airlineFilter === "all" || route.airline === Number(airlineFilter)) &&
        (airportFilter === "all" || route.src === airportFilter)
    })
    setFilteredAirlines(filteredRoutes)
  }

  useEffect(filterRoutes, [airlineFilter, airportFilter])

  const handleFilterRoutesByAirline = (airline) => setAirlineFilter(airline)
  const handleFilterRoutesByAirport = (airport) => setAirportFilter(airport)
  const handleClearFilters = () => {
    setAirlineFilter("all")
    setAirportFilter("all")
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
      <Select 
        options={data.airlines} 
        valueKey="id"
        titleKey="name"
        allTitle="All Airlines"
        onSelect={handleFilterRoutesByAirline} 
        value={airlineFilter}
        label="Filter by airline"
      />
      <Select 
        options={data.airports} 
        valueKey="code"
        titleKey="name"
        allTitle="All Airports"
        onSelect={handleFilterRoutesByAirport} 
        value={airportFilter}
        label="Filter by airport"
      />
      <button onClick={handleClearFilters}>Clear filters</button>
      <Table 
        className="routes-table" 
        columns={columns} 
        rows={filteredAirlines} 
        format={formatValue}
      />
    </div>
  )
}

export default App;