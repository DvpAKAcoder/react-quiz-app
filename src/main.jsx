import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from './Components/Front.jsx';
import Quiz from './Components/Quiz.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>,
)
