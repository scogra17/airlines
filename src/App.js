import React, { Component } from 'react';
import './App.css';
import data from './data'

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
    {data.routes.map(route => <li>{route.airline} | {route.src} | {route.dest}</li>)}
  </ul>
</div>
)

export default App;