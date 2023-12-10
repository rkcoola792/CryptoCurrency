import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Currencies from './components/Currencies.jsx'
import News from './components/News.jsx'
import Error from './components/Error.jsx'
import Exchange from "./components/Exchanges.jsx"
import CryptoDetails from './components/CryptoDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "homepage",
        element: <Homepage></Homepage>,
      },
      {
        path: "currencies",
        element: <Currencies></Currencies>,
      },
      {
        path: "exchange",
        element: <Exchange></Exchange>,
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "crypto/:coinId",
        element: <CryptoDetails></CryptoDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router ={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
