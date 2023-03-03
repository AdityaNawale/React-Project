import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<News key="gereral" pageSize={10} country="in" category="gereral"/>}></Route>
          <Route exact path="/business" element={<News key="business"  pageSize={10} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment"element={<News key="entertainment"  pageSize={10} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News key="gereral"  pageSize={10} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News key="helth"  pageSize={10} country="in" category="health"/>}></Route>
          <Route exact path="/sport" element={<News key="sport"  pageSize={10} country="in" category="sport"/>}></Route>
          <Route exact path="/technology" element={<News key="technology"  pageSize={10} country="in" category="technology"/>}></Route>
          <Route exact path="/science" element={<News key="science"  pageSize={10} country="in" category="science"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}


