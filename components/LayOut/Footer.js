import React from 'react'
import styles from "../../styles/components/Layout/footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.alikaCredit}>
            Made with ❤️ by <span className={styles.alika}>ALIKA</span>
        </div>
    </div>
  )
}

export default Footer