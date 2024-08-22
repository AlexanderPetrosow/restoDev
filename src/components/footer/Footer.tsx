import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-3 text-center">
            <a href="">
              <GrHomeRounded />
            </a>
          </div>
          <div className="col-3 text-center">
            <a href="">
              <LiaClipboardListSolid />
            </a>
          </div>
          <div className="col-3 text-center">
            <a href="">
              <FiShoppingCart />
            </a>
          </div>
          <div className="col-3 text-center">
            <a href="">
              <SlUser href="#test"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
