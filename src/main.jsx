import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';
import About from './components/Pages/Aboutus/About.jsx';
import Test from './components/Pages/Testomonial/test.jsx';
import Contact from './components/Pages/Contactus/Contact.jsx';
import Services from './components/Pages/Home/Services.jsx';
import Servicesss from './components/Pages/Services/Servicesss.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/testimonials",
        element:<Test />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/service",
        element:<Servicesss />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
