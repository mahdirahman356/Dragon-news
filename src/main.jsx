import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routs.jsx'
import { RouterProvider } from 'react-router-dom'
import Context from './component/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
