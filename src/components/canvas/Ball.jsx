import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {

  // useTexture([input]) the input is our image
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component makes mesh float
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      {/* global light  */}
      <ambientLight intensity={0.25} />
      {/* casts light in a specific direction */}
      <directionalLight position={[0, 0, 0.5]}/>

      {/* A Three.js component that represents 3D Geometry */}
        <mesh castShadow receiveShadow scale={2.75}>
          {/* Specific 3d shape */}
          <icosahedronGeometry args={[1, 1]} />
          {/* Reacts to light and shadows */}
          <meshStandardMaterial 
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />

          {/* Texture */}
          <Decal
            position={[0, 0, 1]}
            // mirror them twice
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
        
    </Float>
  )
}

const BallCanvas = ({ icon}) => {
    return (
      <Canvas
        frameloop="demand"
        gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon}/>
        </Suspense>
  
        <Preload all />
      </Canvas>
    )
}

export default BallCanvas