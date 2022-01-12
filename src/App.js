import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useAspect } from "@react-three/drei";
import { Intro } from "./Intro";

function Scene() {
  const size = useAspect(1800, 1000);
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/10.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    return vid;
  });
  // Keep in mind videos can only play once the user has interacted with the site ...
  useEffect(() => void video.play(), [video]);
  return (
    <mesh scale={size}>
      <planeBufferGeometry />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}

export default function App() {
  return (
    <Intro>
      <Canvas orthographic linear camera={{ position: [0, 0, 100] }}>
        <Scene />
      </Canvas>
    </Intro>
  );
}
