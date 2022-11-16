import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Vada",
    description: "The finest one",
    price: 40.0
  },
  {
    id: "m2",
    name: "Dosa",
    description: "Taste of south tradition",
    price: 60.0
  },
  {
    id: "m3",
    name: "Naan roti",
    description: "Bread from the heart",
    price: 30.0
  },
  {
    id: "m4",
    name: "Butter Chicken",
    description: "Straigh from Hydrabad",
    price: 180.0
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
