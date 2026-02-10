import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Contact from '../../assets/CustomIcons/phone.png';
import Projects from '../../assets/CustomIcons/project.png';
import designs from '../../assets/CustomIcons/design.png';
import About from '../../assets/CustomIcons/about.png';
import "./styles.css";

export default function FloatingBar({ children, className }) {
  const [popAnimation, setPopAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setPopAnimation(true);
        console.log("Scrolled more than 20px");
        // ✅ Trigger your function here
      } else {
        setPopAnimation(false);
        console.log("Scrolled less than 20px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 🧼 Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {popAnimation &&
        <motion.div className="floatingBar"

          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="floatingBarContainer">
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              <img src={About} alt="About section" />
            </Link>

            <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              offset={-80}
            >
              <img src={Projects} alt="Projects section" />
            </Link>

            <Link
              to="Designs"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              offset={-80}
            >
              <img src={designs} alt="Designs section" />
            </Link>

            <Link
              to="Contacts"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              offset={-80}
            >
              <img src={Contact} alt="Contact section" />
            </Link>
          </div>
        </motion.div >
      }
    </>
  );
}
