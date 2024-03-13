import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserDPage from './pages/UserDPage.jsx'
import ExtensionPage from './pages/ExtensionPage.jsx'
import DarkPatternPage from './pages/DarkPatternPage.jsx'
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Gsap from "./Gsap.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'
import toast, { Toaster } from 'react-hot-toast';
import CheckP from './pages/CheckP.jsx'


const App = () => {
  Gsap();
  return (
    <main className=' font-[secondary] text-slate-100'>
      <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/extension' element={<ExtensionPage/>} />
      <Route path='/userd' element={<UserDPage/>} />
      <Route path='/darkpattern' element={<DarkPatternPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/checkp' element={<CheckP/>} />
    </Routes>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </main>
    
  )
}

export default App