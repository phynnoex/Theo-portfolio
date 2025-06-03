import { delay, easeIn, motion } from "framer-motion";


export default function Tooltip({content, hoveredToggleButton}) {
  return (
    <>
    {hoveredToggleButton && (
        <motion.div className="buttonDescription"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: easeIn.easeInOut }}
        >
          <p>{content}</p>
        </motion.div>
      )}
      </>
  );
}