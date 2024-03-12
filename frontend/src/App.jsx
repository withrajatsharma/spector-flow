import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage.jsx'
import UserDPage from './pages/UserDPage.jsx'
import ExtensionPage from './pages/ExtensionPage.jsx'
import DarkPatternPage from './pages/DarkPatternPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/extension' element={<ExtensionPage/>} />
      <Route path='/userd' element={<UserDPage/>} />
      <Route path='/darkpattern' element={<DarkPatternPage/>} />
    </Routes>
  )
}

export default App