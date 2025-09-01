import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import Details_bar from "./Detail-bar";

export default function MobileNav({ setSearchQuery, toggle }) {
  return (
    <>
      
      <Details_bar toggle={toggle} />
      <div className="search_bar">
        <input
          type="text"
          placeholder="Find Some shoes"
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
        <motion.div
            whileHover={{ scale: 1.1 }} // Enlarge on hover
            whileTap={{ scale: 0.9 }} // Shrink on click
        >

          <BsSearch className="search-btn" />
        </motion.div>
      </div>
    </>
  );
}
