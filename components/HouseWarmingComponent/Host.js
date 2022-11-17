import React from 'react'
import styles from "../../styles/components/houseWarming/host.module.scss"
const Host = () => {
  return (
    <div className={styles.host}>
      <div className={styles.title}>
        The HouseWarmingFunction is hosted by
      </div>
      <div className={styles.hostNames}>
        <p>Dinesh</p>
        <p>Dhanush</p>
      </div>
    </div>
  )
}

export default Host