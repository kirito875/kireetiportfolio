import React,{useRef,forwardRef,useImperativeHandle} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import "./Game.css";

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    args: [1, 1, 1],
    ...props,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial color="red" />
    </mesh>
  );
}

const Ball=forwardRef((props,foRef) => {
  const [ref, api] = useSphere(() => ({
    type:'Dynamic',
    mass: 1,
    position: [0, 20, 0],
    args: [0.7, 64, 32],
    ...props,
  }));
  useImperativeHandle(foRef,()=>({
    moveForward(){
        api.velocity.set(0,0,-4);
        console.log('moving');
    },
    moveRight(){
      api.velocity.set(4,0,0);
      console.log('moving right');
    },
    moveLeft(){
     api.velocity.set(-4,0,0);
     console.log('moving left');
    },
    moveBack(){
     api.velocity.set(0,0,4);
     console.log('moving Back');
    },
    jump(){
     api.velocity.set(0,4,0);
     console.log('jump');
    },
    stopMove() {
        api.velocity.set(0, 0, 0)
        api.angularVelocity.set(0, 0, 0)
      }
  }))

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.7, 64, 32]} />
      <meshNormalMaterial color="red" />
    </mesh>
  );
})

function Game() {

  const ballRef=useRef();

  const handleKeyDown = (event) => {
    if (event.key == "ArrowUp"&&ballRef.current) ballRef.current.moveForward();
    if(event.key=="ArrowRight"&&ballRef.current) ballRef.current.moveRight();
    if(event.key=="ArrowLeft"&&ballRef.current) ballRef.current.moveLeft();
    if(event.key=="ArrowDown"&&ballRef.current) ballRef.current.moveBack();
    if(event.keyCode==32&&ballRef.current)ballRef.current.jump();
  };

  const handleKeyUp=(event)=>{
    ballRef.current.stopMove();
  }

  return (
    <div className="canvasdiv" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={"0"}>
      <Canvas className="canvas">
        <PerspectiveCamera
          scale={[4, 4, 4]}
          position={[-0.057, 3.54, 8]}
          rotation={[-Math.PI / 9, 0, 0]}
          makeDefault
        />
        <ambientLight />
        <Physics>
          <Ball ref={ballRef}/>
          <Cube />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}

export default Game;
