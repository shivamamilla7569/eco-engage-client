import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegistrationForm from './pages/RegistrationForm';
import LoginPage from './pages/LoginPage';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EcoEngageDashboard from './pages/EcoEngageDashboard';
import VolunteerOpportunities from './pages/VolunteerOpportunities';
import EnvironmentalAwareness from './pages/EnvironmentalAwareness';
import EcoFriendlyTransport from './pages/EcoFriendlyTransport';
import ElectricVehicles from './pages/ElectricVehicles';
import PublicTransport from './pages/PublicTransport';
import BikingWalking from './pages/BikingWalking';

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><LandingPage /></>,
    
  },
  {
    path: "/eco-friendly-transport",
    element:<><EcoFriendlyTransport/></>,
    
  },
  {
    path: "/publictransport",
    element:<><PublicTransport/></>,
    
  },
  {
    path: "/bikingwalking",
    element:<><BikingWalking/></>,
    
  },
  {
    path: "/electricvehicles",
    element:<><ElectricVehicles/></>,
    
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
    element:<><EcoEngageDashboard/></>,
  },
  {
    path: "/hub",
    element:<><EnvironmentalAwareness/></>,
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
    path: "/volunteer",
    element:<><VolunteerOpportunities/></>,
  },
  {
    path: "/contactus",
    element:<><Navbar/><ContactUs/></>,
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
