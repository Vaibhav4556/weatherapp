import logo from "./logo.svg";
import {useState} from "react"

import "./App.css";
import ContryInfo from "./ContryInfo";
import WeatherInfo from "./WeatherInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContryInfo />} />
            <Route path="/weather" element={<WeatherInfo />} />
          </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
