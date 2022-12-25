import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Order from './pages/About';
import About from './pages/About';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Logout from './auth/Logout';

function App() {
  return (
    <>
    <div className="App container  ">
      

      <div>
      <Header />
      </div>

      <Routes>
                 <Route
                   path='/'
                   element={<Home />}
                 />

<Route
                   path='Home'
                   element={<Home/>}
                 />

               <Route
                   path='About'
                   element={<About/>}
                 />

             <Route
                   path='Signup'
                   element={<Signup/>}
                 />

             <Route
                   path='Login'
                   element={<Login/>}
                 />

          <Route
                   path='Logout'
                   element={<Logout/>}
                 />
      </Routes>

                 
      <div>

      <Footer />
      </div>
    </div>

      

    </>
  );
}

export default App;













































