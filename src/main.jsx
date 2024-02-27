// core React library
import React from 'react'
// package providing methods for working with DOM
import ReactDOM from 'react-dom/client'
// library for making HTTP requests
import axios from "axios";
// component provided by SWR library for configuring global options for data fetching using SWR strategy 
import { SWRConfig } from 'swr'
// import app component to render here
import App from './App.jsx'

// fetcher function is defined to handle data fetching using axios
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

// app component is wrapped inside <SWRConfig> to provide the fetcher function as a global configuration for data fetching using SWR
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />      
    </SWRConfig>
  </React.StrictMode>,
)
