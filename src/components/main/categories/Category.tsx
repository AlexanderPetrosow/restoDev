import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ScrollSpy } from "bootstrap";
import styles from "./Category.module.css";

const categories = [
  {
    name: "Листовые чаи 400мл",
    id: "leaf-tea",
    items: ["Чай Эрл Грей", "Чай Ассам", "Чай Сенча", "Чай Матча"],
  },
  {
    name: "Авторские чаи",
    id: "author-tea",
    items: [
      "Авторский Чай с Брусникой",
      "Авторский Чай с Имбирем",
      "Авторский Чай с Лимоном",
    ],
  },
  {
    name: "Чай в чайнике",
    id: "teapot-tea",
    items: ["Чайник Зеленого Чая", "Чайник Черного Чая"],
  },
  {
    name: "Фреш",
    id: "fresh",
    items: ["Фреш Апельсиновый", "Фреш Грейпфрутовый", "Фреш Яблочный"],
  },
  {
    name: "Смузи",
    id: "smoothie",
    items: ["Смузи Клубничный", "Смузи Банановый", "Смузи Черничный"],
  },
  {
    name: "Кофе",
    id: "coffee",
    items: ["Эспрессо", "Американо", "Капучино", "Латте"],
  },
  {
    name: "Горячий шоколад",
    id: "hot-chocolate",
    items: ["Горячий Шоколад Классический", "Горячий Шоколад с Апельсином"],
  },
  {
    name: "Соки",
    id: "juices",
    items: ["Яблочный Сок", "Апельсиновый Сок", "Томатный Сок"],
  },
  {
    name: "Молочные коктейли",
    id: "milkshakes",
    items: ["Ванильный Коктейль", "Шоколадный Коктейль", "Клубничный Коктейль"],
  },
  {
    name: "Холодные чаи",
    id: "iced-tea",
    items: ["Холодный Зеленый Чай", "Холодный Черный Чай"],
  },
  {
    name: "Морс",
    id: "mors",
    items: ["Морс Клюквенный", "Морс Облепиховый"],
  },
  {
    name: "Сидр",
    id: "cider",
    items: ["Сидр Яблочный", "Сидр Грушевый"],
  },
  {
    name: "Газированные напитки",
    id: "soda",
    items: ["Кока-Кола", "Спрайт", "Фанта"],
  },
  {
    name: "Энергетики",
    id: "energy-drinks",
    items: ["Ред Булл", "Бёрн"],
  },
];

const Category: React.FC = () => {
  useEffect(() => {
    const scrollSpyElement = document.body;
    const scrollSpy = new ScrollSpy(scrollSpyElement, {
      target: "#navbar-category",
      offset: 100,
    });
    return () => {
      scrollSpy.dispose();
    };
  }, []);

  return (
    <div className={`${styles.main}`}>
      <div
        id="navbar-category"
        className={`${styles.categoryContainer} d-flex gap-2`}
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
                <div className={`${styles.cardContainer} card`}>
                  <img
                    src="https://via.placeholder.com/150"
                    className={`${styles.cardImgTop}`}
                    alt={item}
                  />
                  <div className={`${styles.cardBody}`}>
                    <h5 className="card-title">{item}</h5>
                    <div
                      className={`${styles.addToCart} d-flex justify-content-between`}
                    >
                      <button className={`${styles.addToCartBtns}`}>
                        <FaMinus />
                      </button>
                      <p>price</p>
                      <button className={`${styles.addToCartBtns}`}>
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
    </div>
  );
};

export default Category;
