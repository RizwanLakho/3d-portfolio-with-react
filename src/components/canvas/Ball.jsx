import { Decal,Float,OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] =useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight 
        intensity={0.25}

      />
      <directionalLight position={[0,0,0.05]} />
      <mesh 
      castShadow receiveShadow scale={2.75}>
      <iconsahedronGeometry args={[1,1]} />
      <meshStandaredMaterial 
      color='#fff8eb'
      polygonoffset
      polygonsetFactor={-5}
      flatShading />
      <Decal
      position ={[0,0,1]}
      rotation={[2*Math.PI, 0 ,6.25]}
      map={decal} >

      </Decal>

      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop="demand"
    gl={{ preserveDrawingBuffer:true}}>

    <Suspence
    fallback={<CanvasLoader />}>
    <OrbitControls
    enableZoom={false} />
    <Ball imgUrl={icon} />

    </Suspence>

     <Preload all />
    </Canvas>
  )
}

export default BallCanvas

import React from 'react'

const Ball = () => {
  return (
    <div>
      
    </div>
  )
}

export default Ball

