import React from "react";
import styles from "./CategoryItem.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

type CategoryItemProps = {
  name: string;
  cost: number;
  photo: string;
  description: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ name, cost, photo, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={styles.cardContainer}>
        <img src={photo} className={styles.cardImgTop} alt={name} />
        <div className={styles.cardBody}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className={styles.addItemsToCart + " d-flex justify-content-between"}>
            <button>
              <FaMinus />
            </button>
            <p className="text-center">{cost} ₽</p>
            <button>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
