import React from 'react'
import styles from "../../styles/components/houseWarming/heading.module.scss"
const Heading = ({hostDetails}) => {
  const name1 = hostDetails[0].hostName;
  const name2 = hostDetails[1] ? hostDetails[1].name :null;

  return (
    <div className={styles.heading}>
        <div className={styles.request}>Please gather with us for</div>
        <div className={styles.name}>{name1 && name1 } {name2 && `& ${name2}`}</div>
        <div className={styles.title}>🏡 HouseWarming 🏡</div>
    </div>
  )
}

export default Heading