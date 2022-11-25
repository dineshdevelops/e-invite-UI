import React from 'react'
import styles from "../../styles/components/weddingComponent/aboutPerson.module.scss"
import Image from 'next/image'
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';

const AboutBride = ({brideProps}) => {
  return (
    <div className={styles.aboutPerson}>
      <p className={styles.personName}>About Ms.{brideProps.brideName}</p>
      <div className={styles.personContent}>
                <Image src={brideProps.bridePhoto} alt="Bride Image" className={styles.image} width={1000} height={1000} objectFit="cover"/>
                <div className={styles.personBrief}>
                    {brideProps.brideDetails}
                    <div className={styles.profession}>
                      <Chip
                        label={brideProps.brideProfession}
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

export default AboutBride