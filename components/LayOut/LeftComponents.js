import Image from 'next/image'
import React from 'react'
import styles from "../../styles/components/Layout/leftComponents.module.scss"
const LeftComponents = () => {
  return (
    <div className={styles.leftComponents}>
      <div className={styles.logo}>
        <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1669222892/DummyImage/i-invite-1-transparent_pxnvmw.png" alt="logo" 
          width={100}
          height={100}/>
      </div>
      {/* //! Beta name */}
      <div className={styles.beta}>
        BETA
      </div>
    </div>
  )
}

export default LeftComponents