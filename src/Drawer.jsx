import { motion } from "framer-motion";
import styles from "../src/ResponiveMobile.module.css";
import AndroidSwitch from "./DarkMode";
import { HiOutlineCog6Tooth, HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function Drawer({isOpen, toggle}) {
  // const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
    
      <motion.div
        className={styles.Drawer}
        initial={{ x: "-100%" }} 
        animate={{ x: isOpen ? "0%" : "-100%" }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >

        <div className={styles.InnerDrawer}>
          
          <div className={styles.drawer_cols} style={{border:'none'}}>
            <div style={{cursor:'pointer', margin: 0}} className="circle" onClick={toggle}><MdOutlineCancel/></div>
            <Link style={{cursor:'pointer'}} to={'/'} className="circle" onClick={toggle}><TiHomeOutline/></Link>
          </div>
          <div style={{cursor:'pointer'}} className={styles.drawer_cols}>
            <HiOutlineCog6Tooth size={"1.9em"} />
            Dark Mode
            <AndroidSwitch />
          </div>

          <div className={styles.drawer_cols}>
            <HiOutlineShoppingCart size={"1.9em"} />
            Cart
            <div className="circle">01</div>
          </div>
          
          <Link onClick={toggle} style={{ width: "100%",textDecoration: 'none',cursor:'pointer', minHeight: '3em' }} to={'/Register'} className="sign-up">
            Login
          </Link>

          <div style={{cursor:'pointer'}} className={styles.drawer_cols}>
            <AiOutlineCustomerService size={"1.9em"} />
            09025037636
            <div className="circle"><IoCallOutline/></div>

          </div>

          
          <div style={{cursor:'pointer'}} className={styles.drawer_cols}>
            <LiaShippingFastSolid size={"1.9em"} />
            Your orders
            <div className="circle">06</div>


          </div>
          <div style={{cursor:'pointer'}} className={styles.drawer_cols}>
            <IoIosNotificationsOutline size={"1.9em"} />
            Notifications
            <div className="circle">10</div>


          </div>
          <div style={{cursor:'pointer'}} className={styles.drawer_cols}>
            <CiLogout size={"1.9em"} />
            Logout
            <div className="circle"><MdOutlineCancel/></div>



          </div>
          
        </div>
      </motion.div>
    </>
  );
}
