import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Sphere} from "@react-three/drei";

const BodyComponent = () => {
  const size = 3 + Math.random() * 0.25;
  const range = 6;
  const density = size * 0.002;

  let x = Math.random() * range - range * 0.5;
  let y = Math.random() * range - range * 0.5 + 6;
  let z = Math.random() * range - range * 0.5;

  const theBodyRef = useRef();

  useFrame(() => {
    const theBody = theBodyRef.current;
    if (!theBody) return;

    const { x, y, z } = theBody.translation();
    const pos = new THREE.Vector3(x, y, z);

    // Define the rectangular area (x from -5 to 5, y = 6, z from -2 to 2)
    const clampedX = Math.max(-10, Math.min(10, x));
    const clampedZ = Math.max(-2, Math.min(2, z));

    // Closest point in the rectangular area
    const closestPointOnArea = new THREE.Vector3(clampedX, 6, clampedZ);

    // Direction towards the closest point in the area
    const dir = pos.clone().sub(closestPointOnArea).normalize();
    theBody.applyImpulse(dir.multiplyScalar(-0.5), true);
});


  return (
    <RigidBody ref={theBodyRef} density={density} position={[x, y, z]} restitution={0.5}>
      <Sphere args={[size, 32, 32]}>
      <meshPhysicalMaterial
        transmission={0.9}
        opacity={1}
        roughness={0.1}
        metalness={0.1}
        ior={1.5}
        reflectivity={1}
        // thickness={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        color="pink"
      />
      </Sphere>
    </RigidBody>
  );
};

export default BodyComponent;
