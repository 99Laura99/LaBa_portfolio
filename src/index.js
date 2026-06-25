import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Pagrindinis from "./Pagrindinis";
import Apie from "./Apie";
import Galerija from "./Galerija";
import AEProjects from "./AEProjects";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        {/* Pagrindinis puslapis */}
        <Route path="/" element={<Pagrindinis />} />
        
        {/* Apie puslapis */}
        <Route path="/apie" element={<Apie />} />

        {/* Galerija puslapis */}
        <Route path="/galerija" element={<Galerija />} />

         {/* after effects puslapis */}
        <Route path="/AE_projects" element={<AEProjects />} />
      </Routes>
    </Router>
);


reportWebVitals();
