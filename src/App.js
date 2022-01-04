import "./App.css";
import styled from "styled-components";

import { Suspense } from "react";

import Background from "./components/Background/Background";
import TextSection from "./components/TextSection/TextSection";
import TextSection2 from "./components/TextSection2/TextSection2.js";

import Box from "./components/Box/Box";
import Sphere from "./components/AnimatedSphere/AnimatedSphere";
import Gun from "./components/Gun/Gun";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className='App'>
      <Background />
      <TextSection />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <TextSection2 />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
      <h4 className='text'>This is an imported 3D model</h4>
      <p className='text'>@Artem.Goyko</p>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Gun />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: black;

  canvas {
    height: 600px;
  }

  .text {
    color: white;
  }
`;
