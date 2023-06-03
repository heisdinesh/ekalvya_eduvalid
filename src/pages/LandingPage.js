import React from 'react'
import { Landing ,Badges} from '../components'

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-pinky to-bluey">
      <Landing />
      <Badges  />
    </div>
  )
}

export default LandingPage