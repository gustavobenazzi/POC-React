import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import '../src/styles/App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
