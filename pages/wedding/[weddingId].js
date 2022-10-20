import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/pages/wedding/wedding.module.scss"
import AboutPerson from '../../components/WeddingComponent/AboutPerson'
import LoveStory from '../../components/WeddingComponent/LoveStory'
import Gallery from '../../components/WeddingComponent/Gallery'
import Events from '../../components/WeddingComponent/Events';
import Utility from '../../components/WeddingComponent/Utility'
const PersonalWeddingInvite = () => {
    const router = useRouter();
    const {weddingId} = router.query;
  return (
    <div className={styles.weddingContainer}>
        <div className={styles.name}>Nobita Nobi 💕 Shizuka Minamoto</div>
        <div className={styles.aboutPerson}>
            <AboutPerson />
        </div>
        <div className={styles.loveStory}>
            <div className={styles.title}>Our 💖 Story</div>
            <LoveStory />
        </div>
        <div className={styles.gallery}>
            <div className={styles.title}>Our Recent PhotoShoot 📸</div>
            <Gallery />
        </div>
        <div className={styles.events}>
            <div className={styles.title}>Events 📅</div>
                <div className={styles.eventsList}>
                <Events />
                <Events />
                <Events />
                <Events />
                <Events />
                </div>
            </div>
        <div className={styles.utility}>
           <Utility />
        </div>
    </div>
  )
}

export default PersonalWeddingInvite