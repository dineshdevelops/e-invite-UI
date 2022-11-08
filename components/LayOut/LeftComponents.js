import Image from 'next/Image'
import React from 'react'
import styles from "../../styles/components/Layout/leftComponents.module.scss"
const LeftComponents = () => {
  return (
    <div className={styles.leftComponents}>
      <div className={styles.logo}>
        <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1667814762/MarriageInvite/CommonAssets/dummyLogo_cjxdbg.png" alt="logo" 
          width={80}
          height={80}/>
      </div>
      {/* //! Beta name */}
      <div className={styles.beta}>
        BETA
      </div>
    </div>
  )
}

export default LeftComponents