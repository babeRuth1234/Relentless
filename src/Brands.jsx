import { motion } from "framer-motion";

export default function Brands(props) {
  return (
    <div className="brand-wrapper">
      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: "#0e0e0e", color: "white" }}
        whileTap={{ scale: 0.9 }}
        className="tag"
        title={props.brand.title}
      >
        <img
          src={props.brand.brand}
          style={{ objectFit: "cover", height: "2em", width: "2em" }}
        />
      </motion.div>
      <p className="brand-text" style={{textAlign:'center', fontSize:'0.8em'}}>{props.brand.text}</p>
    </div>
  );
}
