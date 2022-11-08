import React from 'react'
import styles from "../../styles/components/Layout/navBar.module.scss"
import LeftComponents from './LeftComponents'
import RightComponents from './RightComponents'
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftComponent}>
        <LeftComponents />
      </div>
      <div className={styles.rightComponent}>
        <RightComponents />
      </div>
    </div>
  )
}

export default NavBar