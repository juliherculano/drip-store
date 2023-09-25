import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './routes/products'
import Root from './routes/root';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products/",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
