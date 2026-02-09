
import "./styles.css"
import { Element } from 'react-scroll';

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
    return (
        <Element name="Designs" >
            <div className="wrapper">
                <div className="designSectionContainer">
                    <div className="top-slice"></div>
                    <div className="content"></div>
                </div>
                <ClipSvg/>
            </div>
        </Element>

    )
}