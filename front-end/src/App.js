import React from 'react';
import './App.css';
// import Navbar from './components/NavBar
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact'
import Home from './components/Main'
import Team from './components/Team'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/'  element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/team' element={<Team/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
