import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Articles from './components/Articles';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Menu from './components/Menu';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Reviews from './components/Reviews';


const App = () => {
  return (
    <div className="container">
      <Menu/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/reviews',
        element: <Reviews/>
      },
      {
        path: '/articles',
        element: <Articles/>
      },
      {
        path: '/movies',
        element: <Movies/>,
        children:[
          {
            path: '/movies/:id',
            element: <Movie/>
          }
        ]
      }
    ]
  }
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router = {router}/>);
