import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUp_Form';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Solution from './components/pages/Solution';
import SignIn from './components/SignIn';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-up' element={<SignUpForm/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/About-us' element={<About/>} />
          <Route path='/Solution' element={<Solution/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
