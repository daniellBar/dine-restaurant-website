import React from "react";
import { Switch, Route } from 'react-router-dom';
// import { Header } from './cmps/Header.jsx'
import { Home } from './pages/Home.jsx'


export function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Switch>
        {/* <Route component={ProductDetails} path='/product/:id' /> */}
        <Route component={Home} path='/' />
      </Switch>
    </div>
  )
}








