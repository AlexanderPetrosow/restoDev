import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./orderedItem.module.css";

const OrderedItem: React.FC = () => {
  return (
    <div className={styles.orderedItem}>
      <div className="">
        <img src="/assets/orderedItemPhoto.png" alt="" />
      </div>
      <div className="">
        <p>Cет Сытный</p>
        <p>price</p>
      </div>
      <div className={styles.addToCart }>
        <button>
          <FaMinus />
        </button>
        <p>1</p>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default OrderedItem;
