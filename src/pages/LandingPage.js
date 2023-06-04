import React from 'react'
import { Landing , Learnings, GuidetoHack} from '../components'

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-pinky to-bluey">
      <Landing />
      <Learnings  />
      <GuidetoHack/>
    </div>
  )
}

export default LandingPage