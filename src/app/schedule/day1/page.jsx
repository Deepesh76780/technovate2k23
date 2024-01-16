"use client";
import { Suspense } from "react";
import { Html, useProgress } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./model";



function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed()}%</Html>
}


const Home = () => {
  return (
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model/>
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
  );
};

export default Home;