import React from 'react'
import ReactDOM from "react-dom/client"
import { GlobalStyle } from './styles/GlobalStyles.js'
import {RouterProvider} from 'react-router-dom'
import router from './routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyle />
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
