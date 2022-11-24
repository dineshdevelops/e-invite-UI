import React from 'react'
import styles from "../../styles/components/Layout/navBar.module.scss"
import LeftComponents from './LeftComponents'
import MobileNavBar from './MobileNavBar'
import RightComponents from './RightComponents'
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.desktop}>
        <div className={styles.leftComponent}>
          <LeftComponents />
        </div>
        <div className={styles.rightComponent}>
          <RightComponents />
        </div>
      </div>
      <div className={styles.mobile}>
        <MobileNavBar />
      </div>
    </div>
  )
}

export default NavBar