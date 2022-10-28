import React from 'react'
import styles from "../../styles/components/weddingComponent/aboutPerson.module.scss"
import Image from 'next/Image'

const AboutBride = ({brideProps}) => {
  return (
    <div className={styles.aboutPerson}>
      <p className={styles.personName}>About Ms.{brideProps.brideName}</p>
      <div className={styles.personContent}>
                <Image src={brideProps.bridePhoto} alt="personImage2" width="500" height="500"/>
                <p className={styles.personBrief}>
                    {brideProps.brideDetails}
                </p>
      </div>
    </div>
  )
}

export default AboutBride