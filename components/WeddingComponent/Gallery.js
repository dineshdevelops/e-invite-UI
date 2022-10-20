import React from 'react'
import styles from "../../styles/components/weddingComponent/gallery.module.scss"
import Image from 'next/Image';
import gallery1 from "../../public/assets/wedding/gallery1.jpg"
import gallery2 from "../../public/assets/wedding/gallery2.jpg"
import gallery3 from "../../public/assets/wedding/gallery3.jpg"
const Gallery = () => {
  return (
    <div className={styles.gallery}>
          <div className={styles.galleryImages}>
                <Image src={gallery1} alt="personImage3" width="250" height="250" />
                <Image src={gallery2} alt="personImage5" width="250" height="250" />
                <Image src={gallery3} alt="personImage7" width="250" height="250" />
            </div>
    </div>
  )
}

export default Gallery