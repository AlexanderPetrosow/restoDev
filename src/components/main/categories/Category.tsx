import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollSpy } from "bootstrap";
import CategorySection from "./categorySection/CategorySection";
import axios from "axios";
import styles from "./Category.module.css";

const Category: React.FC = () => {
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  type Category = {
    id: string | number;
    name: string;
  };

  // used to fetch list of menu items from spesific rest id, here - 5
  useEffect(() => {
    axios
      .get("https://restodev.ru/api/user/menu/list/5/")
      .then((response) => {
        console.log(response.data);
        if (response.data && response.data.list) {
          const categoriesData: Category[] = response.data.list.map(
            (category: unknown) => ({
              id: category.id,
              name: category.name,
            })
          );
          setCategories(categoriesData);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // used for making categories scroll bar sticky at some point
  useEffect(() => {
    const handleScroll = () => {
      if (categoryContainerRef.current) {
        const offsetTop = categoryContainerRef.current.offsetTop;
        setIsSticky(window.scrollY >= offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // used for enabling scrollspy effect on categories scrollspy
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
      {/* applies map on each category item and returns section, section itself then returns its menu items */}
      {categories.map((category) => (
        <CategorySection key={category.id} id={category.id} name={category.name} />
      ))}
    </div>
  );
};

export default Category;
