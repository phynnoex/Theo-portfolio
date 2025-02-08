import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CuboidCollider, BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { Sphere, Torus} from "@react-three/drei";

const MouseBall = () => {
  const mouseRigid = useRef();

  // Function to update the ball position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (mouseRigid.current) {
        mouseRigid.current.setTranslation({ x: x * 25, y: y * 20, z: 0.2 }, true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <RigidBody ref={mouseRigid} type="kinematicPosition" args={[3,32,32]} restitution={2} mass={10} colliders="trimesh" >
      
      <mesh visible={true}>
        <torusGeometry args={[1,0.05,16,100]}/>
        <meshBasicMaterial color="white" />
      </mesh>
      <BallCollider args={[10]} />
      
      
    </RigidBody>
  );
};

export default MouseBall;
