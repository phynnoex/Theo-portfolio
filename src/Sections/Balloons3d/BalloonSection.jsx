// import React, { useRef } from "react";
// import "./BalloonSection.css";
// import { Canvas } from "@react-three/fiber";
// import { Environment, MeshTransmissionMaterial, OrbitControls, OrthographicCamera } from "@react-three/drei";
// import * as THREE from "three";
// import { useControls } from 'leva'

// function Balloons({ count = 100 }) {
//   const instancedMesh = useRef();
//   const dummy = new THREE.Object3D();
//   const clusterRange = 30;

// //   const materialProps = useControls({
// //     thickness: { value: 0.2, min: 0, max: 1, step: 0.05 },
// //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
// //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
// //     metalness: { value: 0.1, min: 0, max: 1, step: 0.1 },
// //     ior: { value: 1.5, min: 0, max: 3, step: 0.1 },
// //     chromaticAberration: { value: 0.02, min: 0, max: 1 },
// //     reflectivity: { value: 1, min: 0, max: 1, step: 0.1 },
// //     backside: { value: false },
// //     clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
// //     clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },

// //   })

//   React.useEffect(() => {
//     for (let i = 0; i < count; i++) {
//       dummy.position.set(
//         Math.random() * clusterRange / 0.4 - clusterRange / 0.8,
//         Math.random() * clusterRange / 1.2 - clusterRange / 2.4,
//         Math.random() * clusterRange / 2 - clusterRange / 2
//       );
//       dummy.updateMatrix();
//       instancedMesh.current.setMatrixAt(i, dummy.matrix);
//     }
//     instancedMesh.current.instanceMatrix.needsUpdate = true;
//   }, [count]);

//   return (
//     <instancedMesh ref={instancedMesh} args={[null, null, count]}>
//       <sphereGeometry args={[3, 16, 16]} />
//       <meshPhysicalMaterial
//         transmission={0.9}
//         opacity={1}
//         roughness={0.1}
//         metalness={0.1}
//         ior={1.5}
//         reflectivity={1}
//         thickness={0.1}
//         clearcoat={1}
//         clearcoatRoughness={0}
//         color="pink"
//       />
//       {/* <meshPhysicalMaterial {...materialProps}/> */}
//       {/* <MeshTransmissionMaterial/> */}
//     </instancedMesh>
//   );
// }

// export default function BalloonSection() {
//   return (
//     <div className="balloonSection">
//       <Canvas>
//         <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={15} />
//         <ambientLight intensity={1} />
//         <Environment preset="studio" />
//         <pointLight position={[10, 10, 10]} intensity={1} distance={10} />
//         <pointLight position={[1, 10, 5]} intensity={1} />
//         <Balloons count={120} />
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// }

import reat, { useRef } from "react";
import MouseBall from "./GetMouseBall";
import BodyComponent from "./getBody";
import "./BalloonSection.css";
import { Canvas } from "@react-three/fiber";
import {useInView} from "react-intersection-observer";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";

export default function BalloonSection() {
  const {ref, inView} = useInView ({threshold: 0.1});
  return (
    <div className="balloonSection" ref={ref}>
      
      <Canvas frameloop={inView ? "always" : "never"}>
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={15} />
        <ambientLight intensity={1} />
        <Environment preset="studio" />
        <pointLight position={[10, 10, 10]} intensity={1} distance={10} />
        <pointLight position={[1, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Physics >
          {[...Array(100)].map((_, index) => (
            <BodyComponent key={index} />
          ))}
            <MouseBall />
        </Physics>
      </Canvas>
  
    </div>
  );
}
