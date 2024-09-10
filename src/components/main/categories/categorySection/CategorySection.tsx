import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import CategoryItem from "./categoryItem/CategoryItem";
import styles from "./CategorySection.module.css";

type CategorySectionProps = {
  id: string | number;
  name: string;
};

type Dish = {
  id: string | number;
  name: string;
  cost: number;
  photo: string;
  description: string;
  label: string[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ id, name }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetchDishes = useCallback(() => {
    axios
      .get(`https://restodev.ru/api/user/dish/general/${id}/5/`)
      .then((response) => {
        if (response.data && response.data.list) {
          setDishes(response.data.list);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes]);

  return (
    <section id={id.toString()} className={`${styles.categorySection} my-5`}>
      <h2>{name}</h2>
      <div className="row">
        {dishes.map((dish) => (
          <CategoryItem
            key={dish.id}
            name={dish.name}
            cost={dish.cost}
            photo={dish.photo}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
