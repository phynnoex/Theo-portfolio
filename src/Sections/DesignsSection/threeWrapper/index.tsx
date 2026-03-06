import { Canvas, useFrame } from '@react-three/fiber';
import { ThreeEvent } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import * as animationData from '../../../assets/animationData.json';
import { OrbitControls } from '@react-three/drei'
import "./styles.css"
import ArrowUp from '../../../assets/CustomIcons/arrowUp.svg?react'
import Carousel from '../designCarousel/carousel';

const designData: { image: string, link: string, title: string, description: string }[] = [
    { image: "designCover1.png", link: "design1", title: "Web Portfolio", description: "A clean and modern portfolio site showcasing web design work." },
    { image: "designCover2.png", link: "design2", title: "KohiCafe", description: "A cozy cafe website with menu, location, and online ordering features." },
    { image: "designCover3.png", link: "design3", title: "FanSurvey", description: "An interactive survey platform for collecting fan feedback efficiently." },
    { image: "designCover1.png", link: "design1", title: "Web Portfolio", description: "A clean and modern portfolio site showcasing web design work." },
    { image: "designCover2.png", link: "design2", title: "KohiCafe", description: "A cozy cafe website with menu, location, and online ordering features." },
    { image: "designCover3.png", link: "design3", title: "FanSurvey", description: "An interactive survey platform for collecting fan feedback efficiently." },
    { image: "designCover1.png", link: "design1", title: "Web Portfolio", description: "A clean and modern portfolio site showcasing web design work." },
    { image: "designCover2.png", link: "design2", title: "KohiCafe", description: "A cozy cafe website with menu, location, and online ordering features." },
    { image: "designCover3.png", link: "design3", title: "FanSurvey", description: "An interactive survey platform for collecting fan feedback efficiently." },
]

type ThreeWrapperProps = {
    inView: boolean
}


export default function ThreeWrapper({ inView }: ThreeWrapperProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);
    const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
        if (!divRef.current) return;
        divRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }

    return (
        <div className='threeWrapper'>
            <Canvas camera={{ position: [0, 0, 13], fov: 60 }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <Carousel inView={inView} handleDisplayIndex={setDisplayIndex} designObjects={designData} pointerMoveHandler={handlePointerMove} handleVisible={setVisible} />
                </Suspense>
                {/* <OrbitControls /> */}
                <axesHelper />
                <gridHelper />
            </Canvas>
            {visible && <div className='tooltip' ref={divRef} >
                <div className='tooltip_title'><div className='title_text'><span>Web Design</span>{designData[displayIndex % 3].title} </div><button></button></div>
                <div className='tooltip_description'>{designData[displayIndex % 3].description} <div className='tooltip_button'>
                    <div>case studies coooking 🍳</div>
                    <Lottie animationData={JSON.parse(JSON.stringify(animationData))} loop autoplay={true} style={{ height: 30, width: 30 }} />
                </div></div>

            </div>}
        </div>
    )

}