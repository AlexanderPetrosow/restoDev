import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ScrollSpy } from "bootstrap";
import CategoryModal from "../categoryModal/CategoryModal";
import styles from "./Category.module.css";

const categories = [
  {
    name: "Листовые чаи 400мл",
    id: "leaf-tea",
    items: [
      { name: "Чай Эрл Грей", price: 100 },
      { name: "Чай Ассам", price: 110 },
      { name: "Чай Сенча", price: 120 },
      { name: "Чай Матча", price: 130 },
      { name: "Чай Дарджилинг", price: 140 },
      { name: "Чай Ганпаудер", price: 115 },
      { name: "Чай Пуэр", price: 150 },
    ],
  },
  {
    name: "Авторские чаи",
    id: "author-tea",
    items: [
      { name: "Авторский Чай с Брусникой", price: 150 },
      { name: "Авторский Чай с Имбирем", price: 160 },
      { name: "Авторский Чай с Лимоном", price: 170 },
      { name: "Авторский Чай с Розой", price: 175 },
      { name: "Авторский Чай с Ягодами", price: 165 },
    ],
  },
  {
    name: "Чай в чайнике",
    id: "teapot-tea",
    items: [
      { name: "Чайник Зеленого Чая", price: 200 },
      { name: "Чайник Черного Чая", price: 210 },
      { name: "Чайник Улун", price: 220 },
      { name: "Чайник Хризантемового Чая", price: 230 },
    ],
  },
  {
    name: "Фреш",
    id: "fresh",
    items: [
      { name: "Фреш Апельсиновый", price: 180 },
      { name: "Фреш Грейпфрутовый", price: 190 },
      { name: "Фреш Яблочный", price: 200 },
      { name: "Фреш Ананасовый", price: 210 },
      { name: "Фреш Морковный", price: 170 },
    ],
  },
  {
    name: "Смузи",
    id: "smoothie",
    items: [
      { name: "Смузи Клубничный", price: 220 },
      { name: "Смузи Банановый", price: 230 },
      { name: "Смузи Черничный", price: 240 },
      { name: "Смузи Манго", price: 250 },
      { name: "Смузи Шпинат и Ягоды", price: 260 },
    ],
  },
  {
    name: "Кофе",
    id: "coffee",
    items: [
      { name: "Эспрессо", price: 80 },
      { name: "Американо", price: 90 },
      { name: "Капучино", price: 100 },
      { name: "Латте", price: 110 },
      { name: "Макиато", price: 120 },
      { name: "Ристретто", price: 85 },
      { name: "Мокка", price: 115 },
    ],
  },
  {
    name: "Горячий шоколад",
    id: "hot-chocolate",
    items: [
      { name: "Горячий Шоколад Классический", price: 140 },
      { name: "Горячий Шоколад с Апельсином", price: 150 },
      { name: "Горячий Шоколад с Корицей", price: 145 },
      { name: "Горячий Шоколад с Мятой", price: 155 },
    ],
  },
  {
    name: "Соки",
    id: "juices",
    items: [
      { name: "Яблочный Сок", price: 60 },
      { name: "Апельсиновый Сок", price: 70 },
      { name: "Томатный Сок", price: 80 },
      { name: "Виноградный Сок", price: 75 },
      { name: "Сок Гранатовый", price: 90 },
    ],
  },
  {
    name: "Молочные коктейли",
    id: "milkshakes",
    items: [
      { name: "Ванильный Коктейль", price: 160 },
      { name: "Шоколадный Коктейль", price: 170 },
      { name: "Клубничный Коктейль", price: 180 },
      { name: "Банановый Коктейль", price: 175 },
      { name: "Карамельный Коктейль", price: 185 },
    ],
  },
  {
    name: "Холодные чаи",
    id: "iced-tea",
    items: [
      { name: "Холодный Зеленый Чай", price: 90 },
      { name: "Холодный Черный Чай", price: 100 },
      { name: "Холодный Чай с Лимоном", price: 105 },
      { name: "Холодный Чай с Персиком", price: 110 },
    ],
  },
  {
    name: "Морс",
    id: "mors",
    items: [
      { name: "Морс Клюквенный", price: 120 },
      { name: "Морс Облепиховый", price: 130 },
      { name: "Морс Черничный", price: 125 },
      { name: "Морс Малиновый", price: 135 },
    ],
  },
  {
    name: "Сидр",
    id: "cider",
    items: [
      { name: "Сидр Яблочный", price: 140 },
      { name: "Сидр Грушевый", price: 150 },
      { name: "Сидр Вишневый", price: 155 },
      { name: "Сидр Персиковый", price: 145 },
    ],
  },
  {
    name: "Газированные напитки",
    id: "soda",
    items: [
      { name: "Кока-Кола", price: 50 },
      { name: "Спрайт", price: 50 },
      { name: "Фанта", price: 50 },
      { name: "Пепси", price: 50 },
      { name: "7UP", price: 50 },
    ],
  },
  {
    name: "Энергетики",
    id: "energy-drinks",
    items: [
      { name: "Ред Булл", price: 200 },
      { name: "Бёрн", price: 190 },
      { name: "Монстер Энерджи", price: 210 },
      { name: "Рокстар Энерджи", price: 200 },
    ],
  },
];

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
