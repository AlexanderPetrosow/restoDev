import { IoIosArrowRoundBack } from "react-icons/io";
import { CiCircleQuestion, CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiMapPin } from "react-icons/pi";
import styles from "./Header.module.css";

type headerProps = {
  restName: string;
  restAddress: string;
  restOpenPeriod: string;
};

const Header: React.FC<headerProps> = ({
  restName,
  restAddress,
  restOpenPeriod,
}) => {
  return (
    <div className={`${styles.header} contianer`}>
      <div className={`container`}>
      <div className={`${styles.headerTop} d-flex justify-content-between`}>
        <button className={`${styles.headerButton}  text-start`}>
          <IoIosArrowRoundBack />
        </button>
        <h2 className={`text-center`}>{restName}</h2>
        <button className={`${styles.headerButton} text-end`}>
          <CiCircleQuestion />
        </button>
      </div>
      </div>
      <div className={`${styles.headerBottom}`}>
        <div className="d-flex gap-2 mb-2">
          <div className={`${styles.headerBottomButton} shadow d-flex`}>
            <FaStar />
            <p>5</p>
          </div>
          <div className={`${styles.headerBottomButton} shadow`}>
            <IoInformationCircleOutline />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <span className="me-2">
              <PiMapPin />
            </span>
            <p>{restAddress}</p>
          </div>
          <div className="d-flex">
            <span className="me-2">
              <CiClock2 />
            </span>
            <p>{restOpenPeriod}</p>
            <span className="text-success ms-1">Открыто</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
