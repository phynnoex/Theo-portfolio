import { forwardRef, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useLenis } from "lenis/react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import Slide from "./meshes/Slide";
import { inView } from "framer-motion";



type CarouselProps = {
    designObjects: { image: string, link: string, title: string, description: string }[]
    pointerMoveHandler: (e: ThreeEvent<PointerEvent>) => void
    handleVisible: React.Dispatch<React.SetStateAction<boolean>>
    handleDisplayIndex: React.Dispatch<React.SetStateAction<number>>
    inView: boolean
}

export default function Carousel({ designObjects, inView, handleDisplayIndex, handleVisible, pointerMoveHandler }: CarouselProps) {
    const groupRef = useRef<THREE.Group>(null);
    const scrollRef = useRef(0);
    const imageRefs = useRef<THREE.Mesh[]>([]);

    const inViewRef = useRef(inView)
    useEffect(() => {
        inViewRef.current = inView
    }, [inView])


    useLenis((lenis) => {
        if (!inViewRef.current) {
            scrollRef.current = 0; // <-- reset
            imageRefs.current.forEach((ref) => {
                if (ref) {
                    const material = ref.material as THREE.ShaderMaterial
                    material.uniforms.u_scrollSpeed.value = 0;
                }
            });
            return
        }

        const velocity = lenis.velocity
        scrollRef.current = velocity

        imageRefs.current.forEach((ref) => {
            if (ref) {
                const material = ref.material as THREE.ShaderMaterial
                material.uniforms.u_scrollSpeed.value = velocity * 0.5
            }
        })
    })


    const maxVelocity = 30;

    useFrame(() => {
        if (!groupRef.current) return;
        const rawVelocity = scrollRef.current;
        const clampedVelocity = Math.max(
            -maxVelocity,
            Math.min(maxVelocity, rawVelocity)
        );
        groupRef.current.rotation.y += clampedVelocity * 0.0010;
    });




    return (
        <>
            <group ref={groupRef} rotation-y={3.142 / 1.2} position={[0, 0.2, 13]}>
                {designObjects.map((img, index) => (
                    <Slide handleDisplayIndex={handleDisplayIndex} handleVisible={handleVisible} pointerHandler={pointerMoveHandler} key={index} ref={(el) => { if (el) imageRefs.current[index] = el; }} img={img.image} index={index} link={img.link} />
                ))}
            </group>
        </>
    )
}