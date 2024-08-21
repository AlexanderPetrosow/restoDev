import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ScrollSpy } from "bootstrap";
import CategoryModal from "../categoryModal/CategoryModal";
import axios from "axios";
import styles from "./Category.module.css";

const Category: React.FC = () => {
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    img: string;
    title: string;
    price: number;
  } | null>(null);
  const [cartCounts, setCartCounts] = useState<{ [key: string]: number }>({});
  const [categories, setCategories] = useState<Category[]>([]);

  type Item = {
    name: string;
    price: number;
  };

  type Category = {
    id: string | number; // Assuming 'id' could be a string or number
    name: string;
    items: Item[];
  };

  useEffect(() => {
    axios
      .get("https://restodev.ru/api/user/dish/list/1/") // ensure 1 is a valid ID
      .then((response) => {
        console.log(response.data); // Log the response to inspect its structure
        if (response.data && response.data.list) {
          const categoriesData: Category[] = response.data.list.map(
            (category: any) => ({
              id: category.id,
              name: category.name,
              items: category.items.map((item: any) => ({
                name: item.name,
                price: item.cost,
              })),
            })
          );
          setCategories(categoriesData);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (categoryContainerRef.current) {
        const offsetTop = categoryContainerRef.current.offsetTop;
        if (window.scrollY >= offsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollSpyElement = document.body;
    const scrollSpy = new ScrollSpy(scrollSpyElement, {
      target: "#navbar-category",
      offset: 100,
    });

    const handleActiveChange = () => {
      const activeItem = document.querySelector("#navbar-category .active");

      document.querySelectorAll("#navbar-category a").forEach((item) => {
        item.classList.remove(styles.active);
      });

      if (activeItem) {
        activeItem.classList.add(styles.active);

        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    };

    window.addEventListener("activate.bs.scrollspy", handleActiveChange);

    return () => {
      scrollSpy.dispose();
      window.removeEventListener("activate.bs.scrollspy", handleActiveChange);
    };
  }, []);

  const handleCardClick = (item: { name: string; price: number }) => {
    setSelectedItem({
      img: "https://via.placeholder.com/150",
      title: item.name,
      price: item.price,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addToCart = (itemName: string) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [itemName]: (prevCounts[itemName] || 0) + 1,
    }));
  };

  const removeFromCart = (itemName: string) => {
    setCartCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (newCounts[itemName] > 0) {
        newCounts[itemName] -= 1;
      }
      return newCounts;
    });
  };

  return (
    <div className={`${styles.main} container`}>
      <div
        id="navbar-category"
        className={`${styles.categoryContainer} ${
          isSticky ? styles.sticky : ""
        }`}
        ref={categoryContainerRef}
      >
        <div className={`${styles.categoryItem}`}>
          <IoSearch />
        </div>
        <div className={`${styles.categoryItem}`}>
          <RxHamburgerMenu />
        </div>
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.id}`}
            className={`${styles.categoryItem}`}
          >
            {category.name}
          </a>
        ))}
      </div>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`${styles.categorySection} my-5`}
        >
          <h2>{category.name}</h2>
          <div className="row">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="col-md-4 mb-4">
                <div
                  className={`${styles.cardContainer} card`}
                  onClick={() => handleCardClick(item)}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    className={`${styles.cardImgTop}`}
                    alt={item.name}
                  />
                  {cartCounts[item.name] > 0 && (
                    <div className={styles.cartCountOverlay}>
                      {cartCounts[item.name]}
                    </div>
                  )}
                  <div className={`${styles.cardBody}`}>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price} ₽</p>
                    <div
                      className={`${styles.addToCart} d-flex justify-content-between`}
                    >
                      <button
                        className={`${styles.addToCartBtns}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(item.name);
                        }}
                      >
                        <FaMinus />
                      </button>
                      <p>{item.price} ₽</p>
                      <button
                        className={`${styles.addToCartBtns}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item.name);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {showModal && selectedItem && (
        <CategoryModal
          img={selectedItem.img}
          title={selectedItem.title}
          onClose={handleCloseModal}
        >
          <p>
            {selectedItem.title} - {selectedItem.price} ₽
          </p>
        </CategoryModal>
      )}
    </div>
  );
};

export default Category;
