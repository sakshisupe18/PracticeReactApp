import React from 'react'

const Hero = ({heroname}) => {
    if(heroname==='Joker')
    {
        throw new Error("Not a Hero");
    }
  return (
    <div>
      <h3>{heroname}</h3>
    </div>
  )
}

export default Hero
