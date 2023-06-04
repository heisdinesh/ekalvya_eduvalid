import React from 'react'
import Ekalavya from "../assets/Ekalavya.png"

const Landing = () => {
  return (
    <div style={{ backgroundImage: `url(${Ekalavya})` }} className="bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen w-full">
        <div className='text Center flex flex-col items-center gap-2'>
            <h1 className="font-bold	 text-7xl">EDU VALID</h1>
            <p className="font-semibold text-xl">Your Path to Self-Study Mastery</p>
        </div>
    </div>
  )
}

export default Landing