import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Indian Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://media.istockphoto.com/id/1164981964/photo/food-traditional-indian-cuisine-dal-palak-paneer-curry-rice-chapati-chutney-in-wooden-bowls.jpg?s=1024x1024&w=is&k=20&c=cnc-Nqw3BqKhoapnW_VHQehLbU7SsTXVEYstQjoXwHQ="
          alt="Indian foods"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
