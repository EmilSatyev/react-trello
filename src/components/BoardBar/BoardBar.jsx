import React from 'react';
import styles from './BoardBar.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const BoardBar = () => {
  return (
    <nav className={styles.navbarBoard}>Board Bar</nav>
  );
};

export default BoardBar;