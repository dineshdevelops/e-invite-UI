import Image from 'next/image';
import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/imageTraverse.module.scss";

const ImageTraverse = ({bannerPhoto}) => {
  return (
    <div className={styles.image}>
      <Image src={bannerPhoto} width={1920} height={600} alt='imageTraversal' />
    </div>
  )
}

export default ImageTraverse