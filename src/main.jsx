import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import TextContext from "./Context/TextContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(

    <TextContext>
        <App />

    </TextContext>



)
