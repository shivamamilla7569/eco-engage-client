import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><LandingPage /></>,
    
  },
  {
    path:"/products",
    element:<><Navbar/><LandingPage/></>
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
