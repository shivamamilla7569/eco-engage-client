import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegistrationForm from './pages/RegistrationForm';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><LandingPage /></>,
    
  },  
  {
    path: "/home",
    element:<><Navbar/><HomePage/></>,
    
  },
  {
    path: "/register",
    element:<><Navbar/><RegistrationForm /></>,
    
  },
  {
    path: "/login",
    element:<><Navbar/><LoginPage/></>,
    
  },
  {
    path: "/dashboard",
    element:<><Navbar/><Dashboard/></>,
  },
  {
    path: "/services",
    element:<><Navbar/><Service/></>,
  },
  {
    path: "/aboutus",
    element:<><Navbar/><AboutUs/></>,
  },
  {
    path: "/contactus",
    element:<><ContactUs/></>,
  }
  
]);

function App() {
  return(
    <>
    <RouterProvider router={router} />
    </>
  ) 
}

export default App;
