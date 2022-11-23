import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../../styles/components/Layout/mobileNavbar.module.scss"
import Image from 'next/Image';
const MobileNavBar = () => {
  return (
    <div className={styles.mobileNavBar}>
      {/* Contact Us */}
      <CallIcon fontSize='large' />
      {/* Logo */}
      <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1667814762/MarriageInvite/CommonAssets/dummyLogo_cjxdbg.png" alt="logo" 
          width={50}
          height={50}/>
      {/* HambergerMenu */}
      <MenuIcon  fontSize='large' />
    </div>
  )
}

export default MobileNavBar