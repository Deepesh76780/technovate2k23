import { useState } from "react";
import {
    Environment,
    PresentationControls,
    useGLTF,
  } from "@react-three/drei";
  import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
  import React, { useRef } from "react";
  
  const Model = () => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    const model = useGLTF("/map.glb", dracoLoader);
    const [zoom, setZoom] = useState(1);

    const handleWheel = (event) => {
      const newZoom = Math.max(0.1, Math.min(2, zoom + event.deltaY * 0.001));
      setZoom(newZoom);
    };
  
    return (
      <>
        <Environment preset="warehouse" />
          <PresentationControls
          global={{ polar: [-0.4, 0.2], azimuth: [-0.4, 0.2] }}
        >
          <primitive object={model.scene} position-y={-2}  scale={[6 * zoom, 6 * zoom, 6 * zoom]} onWheel={handleWheel}></primitive>
        </PresentationControls>
      </>
    );
  };
  
  export default Model;
  