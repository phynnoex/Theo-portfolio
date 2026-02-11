import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import {OrbitControls} from '@react-three/drei'
import "./styles.css"
import Carousel from '../designCarousel/carousel';

const images = ["images1.png", "images2.png", "images1.png", "images2.png", "images1.png"]

export default function ThreeWrapper() {
    return (
        <div className='threeWrapper'>
            <Canvas camera={{position:[0,0,1]}}>
                <Suspense fallback={null}>
                    <Carousel images={images} gap={1.05} position={[-2.5, -1, 0]} />
                </Suspense>
                <OrbitControls/>
                <axesHelper/>
                <gridHelper/>
            </Canvas>
        </div>
    )

}