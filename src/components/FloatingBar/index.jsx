import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Contact from'../../assets/CustomIcons/phone.png';
import Projects from'../../assets/CustomIcons/project.png';
import About from'../../assets/CustomIcons/about.png';
import "./styles.css";

export default function FloatingBar({ children, className }) {
  const [popAnimation, setPopAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setPopAnimation(true);
        console.log("Scrolled more than 20px");
        // ✅ Trigger your function here
      }else{
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
    {  popAnimation && 
      <motion.div  className="floatingBar"
      
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
    >
        <div className="floatingBarContainer">
          <Link
            to="About"
            smooth={true}
            duration={500}
          >
            <img src={About} alt="" />
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
          >
            <img src={Projects} alt="" />
          </Link>
          <Link
            to="Contacts"
            smooth={true}
            duration={500}
          >
            <img src={Contact} alt="" />
          </Link>
        </div>
      </motion.div >
      }
    </>
  );
}
