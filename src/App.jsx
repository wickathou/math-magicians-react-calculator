import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Calculator from './routes/Calculator';
import Layout from './components/Layout';
import Quote from './routes/Quote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
