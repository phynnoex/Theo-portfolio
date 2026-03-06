
import "./styles.css"

import { useInView } from "react-intersection-observer";
import { Element } from 'react-scroll';
import ThreeWrapper from "./threeWrapper";
import { BrowserRouter } from "react-router-dom";
import { Lenis } from "lenis/react";
import { useEffect, useRef } from "react";

const ClipSvg = () => {
    return (
        <svg width="0" height="0" viewBox="0 0 1284 200" aria-hidden="true">
            <defs>
                <clipPath id="slice" clipPathUnits="objectBoundingBox">
                    <path d="
  M1 1
  V0
  C1 0 0.741 0.11 0.505 0.11
  C0.268 0.11 0 0 0 0
  V1
  H1
  Z
" />
                </clipPath>
            </defs>
        </svg>
    )
}




export default function DesignsSection() {

    const [ref, inView] = useInView({ threshold: 0.5 })
    useEffect(() => {
        console.log(inView)
    }, [inView])
    return (
        <Element name="Designs" >

            <div className="wrapper" >
                <div className="designSectionContainer" ref={ref}>
                    <div className="top-slice"></div>
                    <div className="content">

                        <ThreeWrapper inView={inView} />

                    </div>
                </div>
                <ClipSvg />
            </div>

        </Element>

    )
}