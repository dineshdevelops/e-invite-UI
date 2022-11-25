import React from 'react'
import styles from "../../styles/components/weddingComponent/gallery.module.scss"
import Image from 'next/image';

const Gallery = ({galleryProps}) => {
  // console.log("Gallery Props"+galleryProps)
  return (
    <div className={styles.gallery}>
          <div className={styles.galleryImages}>
            {galleryProps.map((imgUrl,index)=>{
             return (<Image src={imgUrl} alt="personImage2" width={250} height={250} className={styles.image} key={index}/>)
            })}
            </div>
    </div>
  )
}

export default Gallery