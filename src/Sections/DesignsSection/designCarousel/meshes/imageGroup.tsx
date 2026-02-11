import { forwardRef, Suspense } from "react";
import * as THREE from "three";
import { Text3D } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

type ImageGroupProps = ThreeElements["group"] & {
  text: string;
  children?: React.ReactNode;
};

const ImageGroup = forwardRef<THREE.Group, ImageGroupProps>(
  ({ text, children, ...props }, groupRef) => {
    return (
      <group ref={groupRef} {...props}>
        <Suspense fallback={null}>
          <Text3D letterSpacing={-0.06} size={0.2} font="/Theo-portfolio/Inter_Bold.json">
            {text}
            <meshStandardMaterial color="white" />
          </Text3D>
        </Suspense>

        {children}
      </group>
    );
  }
);

export default ImageGroup;