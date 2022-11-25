import React from 'react'
import styles from "../../styles/components/weddingComponent/aboutPerson.module.scss"
import Image from 'next/image'
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';

const AboutGroom = ({groomProps}) => {
  return (
    <div className={styles.aboutPerson}>
      <p className={styles.personName}>About Mr.{groomProps.groomName}</p>
      <div className={styles.personContent}>
                <Image src={groomProps.groomPhoto} alt="Groom Image" className={styles.image} width={1000} height={1000} objectFit="cover" />
                <div className={styles.personBrief}>
                  {groomProps.groomDetails}
                  <div className={styles.profession}>
                    <Chip
                      label={groomProps.groomProfession}
                      icon={<WorkIcon />}
                      color="success"
                      className={styles.professionTitle}
                    />
                  </div>
                </div>
      </div>
    </div>
  )
}

export default AboutGroom