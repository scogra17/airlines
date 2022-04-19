import React, { Component } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'

// const Table = ({ className, columns, rows, format }) => {

// }

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
  <table>
  {/* key={route.airline+route.src+route.dest} */}
    <thead>
      <tr>
        <th>Airline</th>
        <th>Origin</th>
        <th>Destination</th>
      </tr>
    </thead>
    <tbody>
      {data.routes.map(route => {
      return (
          <tr>
            <td>{getAirlineById(route.airline)}</td>
            <td>{getAirportByCode(route.src)}</td> 
            <td>{getAirportByCode(route.dest)}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
</div>
)

export default App;