import React, { useEffect } from "react";
import styles from "./CategoryModal.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

type CategoryModalProps = {
  img: string;
  title: string;
  onClose: () => void;
};

const CategoryModal: React.FC<CategoryModalProps> = ({
  img,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoIosArrowRoundBack />
          </button>
          <img
            src={img}
            alt={`Image for ${title}`}
            className={`${styles.modalImage} `}
          />
          <h3 className={styles.modalTitle}>{title}</h3>
          <div className="row gy-2">
            <div className={`${styles.addItemsToCart} col-lg-2 d-flex justify-content-between`}>
              <button>
                <FaMinus />
              </button>
              <p className="text-center">1</p>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className={`${styles.addToCart} col-lg-10 d-flex justify-content-between`}>
              <button className={`${styles.addToCartBtn}`}>add to cart</button>
              <p>price</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
