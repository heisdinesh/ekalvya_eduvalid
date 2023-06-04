import React from 'react'
import { Landing ,Learnings} from '../components'

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-pinky to-bluey">
      <Landing />
      <Learnings  />
    </div>
  )
}

export default LandingPage