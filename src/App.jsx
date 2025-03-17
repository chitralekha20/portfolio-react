import React from 'react'
import Profile from './Components/Profile'
import Skill from './Components/Skill'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Mail from './Components/Mail'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Profile/>
      <Skill/>
      <Experience/>
      <Footer/>
      <Mail/>
    </div>
  )
}

export default App
