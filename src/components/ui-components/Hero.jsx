import React from 'react'
import hero_image from '../../assets/node.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero-image' src={hero_image}/>
      <p className='hero-title'>GRAPH CELLULAR AUTOMATA</p>
    </div>
    
  )
}

export default Hero