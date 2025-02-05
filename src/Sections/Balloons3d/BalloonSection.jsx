import React from "react";
import "./BalloonSection.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, OrthographicCamera } from "@react-three/drei";

function Box(props) {
  return (
    <mesh position={[props.x, props.y, props.z]}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshPhysicalMaterial
        transmission={1} // Makes it transparent like glass
        opacity={1}
        roughness={0} // Smooth surface (0 = perfect reflection)
        metalness={0.1} // Slight metallic effect
        ior={1.5} // Index of Refraction (glass is typically around 1.5)
        reflectivity={1} // Maximum reflectivity
        thickness={0.5} // Simulates glass thickness
        clearcoat={1} // Extra clearcoat layer
        clearcoatRoughness={0} // Smooth clearcoat
        color="pink"
      />
    </mesh>
  );
}

export default function BalloonSection() {
  // Adjust range to cluster the spheres within a smaller space
  const clusterRange = 30; // Define how large the cluster radius is

  return (
    <div className="balloonSection">
      <Canvas >
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={20} />
        <ambientLight intensity={1} />
        <Environment preset="studio" />
        <pointLight position={[10, 10, 10]} scale={[10,10,10]} intensity={1} distance={10}/>
        <pointLight position={[1, 10, 5]} scale={[10,10,10]} intensity={1}/>
        {/* Generating 10 spheres clustered together */}
        {[...Array(120)].map((_, i) => (
          <Box
            key={i}
            x={Math.random() * clusterRange/0.4 - clusterRange / 0.8}
            y={Math.random() * clusterRange/1.2 - clusterRange / 2.4}
            z={Math.random() * clusterRange/2 - clusterRange / 2}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
      </Canvas>
    </div>
  );
}
