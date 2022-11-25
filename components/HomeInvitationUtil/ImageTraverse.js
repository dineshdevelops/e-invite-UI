import Image from 'next/image';
import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/imageTraverse.module.scss";

const ImageTraverse = () => {
  return (
    <div className={styles.image}>
      <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1669117207/DummyImage/carousel1_1_dyjkud.jpg" width={1920} height={600} alt='imageTraversal' />
    </div>
  )
}

export default ImageTraverse