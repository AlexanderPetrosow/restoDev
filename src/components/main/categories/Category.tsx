import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollSpy } from "bootstrap";
import styles from "./Category.module.css";

const categories = [
  { name: "Листовые чаи 400мл", id: "leaf-tea" },
  { name: "Авторские чаи", id: "author-tea" },
  { name: "Чай в чайнике", id: "teapot-tea" },
  { name: "Фреш", id: "fresh" },
  { name: "Смузи", id: "smoothie" },
];

const Category: React.FC = () => {
  useEffect(() => {
    // Activate Scrollspy after component is rendered
    const scrollSpyElement = document.body;
    const scrollSpy = new ScrollSpy(scrollSpyElement, {
      target: "#navbar-category",
      offset: 100, // adjust based on your header height
    });
    return () => {
      scrollSpy.dispose(); // Cleanup Scrollspy instance on component unmount
    };
  }, []);

  return (
    <div>
      <div id="navbar-category" className={`${styles.categoryContainer} d-flex gap-2`}>
        <div className={`${styles.categoryItem}`}>
          <IoSearch />
        </div>
        <div className={`${styles.categoryItem}`}>
          <RxHamburgerMenu />
        </div>
        {categories.map((category, index) => (
          <a key={index} href={`#${category.id}`} className={`${styles.categoryItem}`}>
            {category.name}
          </a>
        ))}
      </div>

      {/* Sections for Scrollspy */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className={`${styles.section} my-5`}>
          <h2>{category.name}</h2>
          {/* Add content for each section here */}
          <p>Content for {category.name}</p>
        </section>
      ))}
    </div>
  );
};

export default Category;
