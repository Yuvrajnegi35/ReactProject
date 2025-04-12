import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/Contact/contact.jsx';
<<<<<<< HEAD
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
=======
import Github from './components/Github/Github.jsx';
>>>>>>> d75c7d6a960761162903061658e33246e84cd599
import User from './components/User/User.jsx';



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='github' element={<Github/>} />
<<<<<<< HEAD
        <Route loader={githubInfoLoader} path='user/:userid' element={<User/>} />
=======
        <Route path='user/:userid' element={<User/>} />
>>>>>>> d75c7d6a960761162903061658e33246e84cd599
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);