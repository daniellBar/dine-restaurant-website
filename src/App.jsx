import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/home.jsx'
import {Footer} from './comps/Footer.jsx'


export function App() {
  return (
    <div className="app">
      <Switch>
        <Route component={Home} path='/' />
      </Switch>
      <Footer/>
    </div>
  )
}








