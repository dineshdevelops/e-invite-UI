import React from 'react'
import styles from "../../styles/components/houseWarming/inviteMessage.module.scss"
const InviteMessage = ({inviteMessage}) => {
  return (
    <div className={styles.inviteMessage}>
      {inviteMessage}
    </div>
  )
}

export default InviteMessage