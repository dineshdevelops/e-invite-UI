import React from 'react'
import styles from "../../styles/components/weddingComponent/aboutPerson.module.scss"
import Image from 'next/Image'

const AboutPerson = ({groomProps}) => {
  return (
    <div className={styles.aboutPerson}>
      <p className={styles.personName}>About Mr.{groomProps.groomName}</p>
      <div className={styles.personContent}>
                <Image src={groomProps.groomPhoto} alt="personImage2" width='500' height='400'/>
                <p className={styles.personBrief}>
                  {groomProps.groomDetails}
                </p>
      </div>
    </div>
  )
}

export default AboutPerson