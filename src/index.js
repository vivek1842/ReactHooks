import React from "react";
import ReactDOM  from "react-dom";
import Main from "./Main";
import OptimizedMain from "./OptimizedMain";
import Home  from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./Read";
import WebPage from "./Webpage";
import First from "./First";
import Second from "./Second";
import Third from "./Third";



const myRouter = createBrowserRouter([
  {
    path: '/',
    element : <Home />
  },
  {
    path : '/login',
    element : <Main />
  },
  {
    path : '/opt-login',
    element : <OptimizedMain />
  },
  {
    path: '/read',
    element: <Read />
  },
  {
    path : 'landing',
    element: <WebPage />
  },
  {
    path: 'first',
    element: <First />
  },
  {
    path: 'second',
    element: <Second />
  },
  {
    path: 'first',
    element: <Third />
  }
])

ReactDOM.render(
  <>
  <RouterProvider router={myRouter} />
  </>,
  document.getElementById('root')
)