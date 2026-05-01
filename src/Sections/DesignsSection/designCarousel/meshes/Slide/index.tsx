import { forwardRef, useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import vertexShader from '../../shaders/vertex.vert'
import fragmentShader from '../../shaders/fragment.frag'
import { useFrame, type ThreeEvent } from "@react-three/fiber"
const radius = 2
const height = 1.2
const segmentAngle = 3.1415 / 4.5
const gap = 0.01

type SlideProps = {
    img: string
    index: number
    link: string
    handleVisible: React.Dispatch<React.SetStateAction<boolean>>
    handleDisplayIndex: React.Dispatch<React.SetStateAction<number>>
    pointerHandler: (e: ThreeEvent<PointerEvent>) => void;
}


type ImageUniforms = {
    u_image: { value: THREE.Texture | null };
    u_scrollSpeed: { value: number };
};
const Slide = forwardRef<THREE.Mesh, SlideProps>(
    ({ img, index, link, handleDisplayIndex, handleVisible, pointerHandler }, meshRef) => {
        const uniforms = useRef<ImageUniforms>({
            u_image: { value: null },
            u_scrollSpeed: { value: 0 }
        });
        const texture = useTexture(`/Theo-portfolio/designCovers/${img}`)
        const material = useRef<THREE.ShaderMaterial | null>(null);

        const geometry = useMemo(() => {
            return new THREE.CylinderGeometry(
                radius,
                radius,
                height,
                64,
                24,
                true,
                index * segmentAngle + gap,
                segmentAngle - gap * 2
            )
        }, [index])

        useEffect(() => {
            uniforms.current.u_image.value = texture;
            texture.colorSpace = THREE.SRGBColorSpace;
        }, [texture]);


        return (
            <mesh scale={[-1,1,1]} geometry={geometry} ref={meshRef} key={index} onPointerLeave={() => handleVisible(false)} onPointerEnter={() => { handleDisplayIndex(index); handleVisible(true) }} onPointerMove={(e) => pointerHandler(e)} >
                <shaderMaterial
                    ref={material}
                    uniforms={uniforms.current}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    side={THREE.DoubleSide}
                />
            </mesh>
        )
    })

export default Slide