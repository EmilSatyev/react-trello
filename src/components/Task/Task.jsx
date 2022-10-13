import React from "react";
import styles from "./Task.module.scss";
import cnBind from "classnames/bind";
import image1 from "../../assets/image/slider.jpg";

const cx = cnBind.bind(styles);

const Task = (props) => {
  const { card } = props;
  return (
    <li className={styles.task}>
      {card.image && <img src={card.image} alt="image" />}
      {card.title}
    </li>
  );
};

export default Task;