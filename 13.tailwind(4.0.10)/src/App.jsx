import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from './components/Typography'
import SpacingAndSizing from './components/SpacingAndSizing'
import FlexAndResponsive from './components/FlexAndResponsive'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
   {/* <Typography/>
    <SpacingAndSizing/>
     <FlexAndResponsive/>
      */}
      <Navbar/>
      <ProfileCard/>
    </>
  )
}

export default App
