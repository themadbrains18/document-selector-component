import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentSelector from './components/documentSecelctor';

// layouts
import Dashboard from './Layouts/Dashboard';


const App: React.FC = () => {
  return (
      <BrowserRouter>
        
        <Routes>
          {/* Define your routes using Route component */}
          {/* <Route path="/personal-info" element={PersonalInfo} /> */}
          <Route path="/agreements" element={<Dashboard><DocumentSelector /></Dashboard>} />

          {/* Handle 404 Not Found */}
          <Route path="*" element={`<div>404 Not Found</div>`} />
        </Routes>
      </BrowserRouter>

  );
};

export default App;
