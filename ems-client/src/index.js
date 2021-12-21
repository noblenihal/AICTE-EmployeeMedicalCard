import React from 'react';
import ReactDOM from 'react-dom';
import image from "./images/logo_new.png"
import './index.css';
import Form from "./components/Form";
import App from './App';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import EmployeeDetails from './components/EmployeeDetails';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header> 
        <img id="logo" src={image} alt="aicte-logo"></img>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="employees" element={<Form />} />
        <Route path="employee-details/:id" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

