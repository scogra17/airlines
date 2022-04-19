import React, { Component } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'

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
  <ul>
    {data.routes.map(route => {
     return (
        <li key={route.airline+route.src+route.dest}>
          {getAirlineById(route.airline)} | 
          {getAirportByCode(route.src)} | 
          {getAirportByCode(route.dest)}
        </li>
      )
    })}
  </ul>
</div>
)

export default App;