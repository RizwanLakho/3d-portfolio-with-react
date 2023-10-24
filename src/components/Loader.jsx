import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const Loader = () => {
 const {porgress} = useProgress();
  return (
    <Html>
      <span className='canvas-load'>
      <p
      style={
        {
          fontSize:14,
          color:'white',
          fontWeight: 800,
          marginTop: 40

        }
      }>{porgress.toFixed(2)}%</p>

      </span>
    </Html>
  )
}

export default Loader