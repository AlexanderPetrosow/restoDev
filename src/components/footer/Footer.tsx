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
                    <div className="col-3 text-center"><GrHomeRounded /></div>
                    <div className="col-3 text-center"><LiaClipboardListSolid /></div>
                    <div className="col-3 text-center"><FiShoppingCart /></div>
                    <div className="col-3 text-center"><SlUser /></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
