import React from 'react'
import { Landing ,Badges, GuidetoHack } from '../components'

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-pinky to-bluey">
      <Landing />
      <Badges  />
      <GuidetoHack />
    </div>
  )
}

export default LandingPage