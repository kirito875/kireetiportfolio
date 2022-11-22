import React,{useEffect,useState,useRef} from "react";
import pic from "../forPortfolio.jpg";
import Typed from "react-typed";
import { Canvas } from "@react-three/fiber";
import {  PresentationControls,Sphere,MeshDistortMaterial } from "@react-three/drei";
import "./HomePage.css";

function HomePage() {

  

  return (
    <div className="Home-page row">
      <div className="information col-6">
        <div className="display-2 hello-text">hello:-)</div>

        <div className="display-5 my-name">
          I'am <span className="name-coloring">Kireeti</span>
        </div>

        <div className="display-5 my-hobbies">
          <Typed
            strings={[
              "I'm a Full Stack Developer",
              "I Love Software Development",
              "Like watching Anime",
              "I'm a gamer too..",
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>

        <div className="download-button">
          <button className="downbtn display-5">Download Resume</button>
        </div>
        <div className="social-media">
          <a
            className="twitter"
            href="https://twitter.com/Kirito33377359"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="github"
            href="https://github.com/kirito875"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kasula-kireeti-7b1a10190/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/kirito_106/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="col-6">
      <Canvas className="canvas">
            <ambientLight intensity={0.3}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
            <PresentationControls>
            <Sphere visible args={[1,100,200]} scale={2}>
                <MeshDistortMaterial color="purple" attach="material" roughness={0} speed={3}/>
            </Sphere>
            </PresentationControls>   
        </Canvas> 
      </div>
     
    </div>
  );
}
export default HomePage;
