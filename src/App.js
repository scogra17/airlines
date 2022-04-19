import React, { Component } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'

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

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
  </section>
  <Table className="routes-table" columns={columns} rows={data.routes} format={formatValue}/>
</div>
)

export default App;