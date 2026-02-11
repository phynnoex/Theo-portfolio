import { Image, shaderMaterial, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import * as THREE from "three";
import GLimage from "./meshes/GLImage";

import { useLenis } from "lenis/react";
import ImageGroup from "./meshes/imageGroup";

type carouselProps = {
    gap: number;
    position: [number, number, number];
    images: string[];
};



export default function Carousel({ gap, position, images }: carouselProps) {
    const imageRefs = useRef<THREE.Mesh[]>([]);
    const groupRefs = useRef<THREE.Group[]>([]);
    const totalHeight = images.length * (1 + gap);

    function mod(n: number, m: number) {
        return ((n % m) + m) % m;
    }

    useFrame(() => {
        imageRefs.current.forEach((ref) => {
            if (!ref) return;
            ref.position.x =
                mod(ref.position.x + totalHeight / 2, totalHeight) - totalHeight / 2;
        });
    });

    useLenis((lenis) => {
        const velocity = lenis.velocity
        imageRefs.current.forEach((ref) => {
            if (ref) {
                ref.position.x -= velocity * 0.01
                const material = ref.material as THREE.ShaderMaterial
                material.uniforms.u_scrollSpeed.value = velocity * 0.01;
            }
        });
    })

    return (
        <group>
            {/* {images.map((url, index) => (
                <GLimage image={url} key={index} position={[position[0]  + index * gap, position[1], position[2]]} ref={(el) => { if (el) imageRefs.current[index] = el; }} />
            ))} */}
            {images.map((url, i) => (
                <ImageGroup

                    key={i}
                    text="kohiCafe"
                    ref={(group) => {
                        if (!group) return;
                        groupRefs.current[i] = group; // scroll the entire group
                    }}
                    position={[i * (1 + gap), 0, 0]}
                >
                    <GLimage image={url} ref={(mesh) => {
                        if (!mesh) return;
                        imageRefs.current[i] = mesh; // store for shader updates
                    }} />
                </ImageGroup>
            ))}
        </group>
    )
}
