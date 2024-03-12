import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage.jsx'
import UserDPage from './pages/UserDPage.jsx'
import ExtensionPage from './pages/ExtensionPage.jsx'
import DarkPatternPage from './pages/DarkPatternPage.jsx'
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Gsap from "./Gsap.jsx";


const App = () => {
  Gsap();
  return (
    // bg-[#161618]
    <main className=' font-[secondary]'>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      {/* <Route path='/about' element={<AboutPage/>} /> */}
      <Route path='/extension' element={<ExtensionPage/>} />
      <Route path='/userd' element={<UserDPage/>} />
      <Route path='/darkpattern' element={<DarkPatternPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
    </main>
    
  )
}

export default App