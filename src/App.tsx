import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './Layouts/Dashboard';
import Documents from './pages';

// layouts

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/dashboard' element={<Dashboard />} >
      <Route path='documents/:document' element={<Documents />} />
    </Route>
  )
)

const App: React.FC = () => {
  return (

    <RouterProvider router={router} />

  );
};

export default App;
