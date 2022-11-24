import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/heading.module.scss"

const Heading = () => {
  const text = "The future of Wedding Invitation";
  return (
    <div className={styles.heading}>
      {text}
    </div>
  )
}

export default Heading