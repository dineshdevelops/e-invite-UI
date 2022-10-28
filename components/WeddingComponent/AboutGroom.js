import React from 'react'
import styles from "../../styles/components/weddingComponent/aboutPerson.module.scss"
import Image from 'next/Image'

const AboutGroom = ({groomProps}) => {
  return (
    <div className={styles.aboutPerson}>
      <p className={styles.personName}>About Mr.{groomProps.groomName}</p>
      <div className={styles.personContent}>
                <Image src={groomProps.groomPhoto} alt="Groom Image" width='250' height='250'/>
                <p className={styles.personBrief}>
                  {groomProps.groomDetails}
                </p>
      </div>
    </div>
  )
}

export default AboutGroom