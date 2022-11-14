import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious Breakfast, lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients and by the hands
        of experinced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
