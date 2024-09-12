import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Link to="/">
              <GrHomeRounded />
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/menu">
              <LiaClipboardListSolid />
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/profile">
              <SlUser />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
