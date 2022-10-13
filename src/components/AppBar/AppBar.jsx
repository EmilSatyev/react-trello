import React from 'react';
import styles from './AppBar.module.scss'
import cnBind from "classnames/bind";
import cn from "classnames";

const cx = cnBind.bind(styles);

const AppBar = () => {
  return (
    <nav className={styles.navbarApp}>App Bar</nav>
  );
};

export default AppBar;