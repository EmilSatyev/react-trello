import React from 'react';
import styles from './Column.module.scss'
import cnBind from "classnames/bind";
import image1 from "../../assets/image/slider.jpg";
import Task from "../Task/Task";
import {mapOrder} from "../../utils/sorts";

const cx = cnBind.bind(styles);

const Column = (props) => {
  const {column} = props;
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  return (
    <div className={styles.column}>
      <header>{column.title}</header>
      <ul className={styles.taskList}>
        {
          cards && cards.length > 0 && cards.map(card => <Task key={card.id} card={card}/>)
        }

      </ul>
      <footer>add another card</footer>
    </div>
  );
};

export default Column;