

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './componnets/Header'
import Footer from './componnets/Footer'


function App() {
  

  return (
    <>
    {/* Header */}
    <Header/>


     {/* path for Landing, Home, History */}
     <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
     </Routes>


     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
