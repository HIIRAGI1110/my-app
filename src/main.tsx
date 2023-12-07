import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import App from './Components/App'
import Info from './Components/Info'
import Myself from './Components/Myself'
import Header from './Components/header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path='/Info' element={ <Info /> }/>
        <Route path='/Myself' element={ <Myself /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
