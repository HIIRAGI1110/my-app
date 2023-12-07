import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Components/App'
import Info from './Components/Info'
import Myself from './Components/Myself'
import Header from './Components/header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Header />
        <div className='mainContents'>
          <Routes>
            <Route path="/Achieve" element={ <App /> } />
            <Route path='/' element={ <Info /> }/>
            <Route path='/Myself' element={ <Myself /> }/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
