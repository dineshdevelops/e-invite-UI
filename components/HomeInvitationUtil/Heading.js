import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/heading.module.scss"

const Heading = ({headerTitle}) => {
  const text = "The future of Wedding Invitation";
  return (
    <div className={styles.heading}>
      {headerTitle}
    </div>
  )
}

export default Heading