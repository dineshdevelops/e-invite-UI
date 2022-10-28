import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/pages/wedding/wedding.module.scss"
import AboutGroom from '../../components/WeddingComponent/AboutGroom'
import LoveStory from '../../components/WeddingComponent/LoveStory'
import Gallery from '../../components/WeddingComponent/Gallery'
import Events from '../../components/WeddingComponent/Events';
import Utility from '../../components/WeddingComponent/Utility'
import axios from 'axios'
import AboutBride from '../../components/WeddingComponent/AboutBride'
const PersonalWeddingInvite = ({weddingData}) => {
    const router = useRouter();
    const {weddingId} = router.query;
    const {groomDetails,brideDetails,loveStory,gallery,events} = weddingData;
  return (
    <div className={styles.weddingContainer}>
        <div className={styles.name}>{groomDetails.groomName} 💕 {brideDetails.brideName}</div>
        <div className={styles.aboutPerson}>
            <AboutGroom groomProps={groomDetails} />
            <AboutBride brideProps={brideDetails} />
        </div>
        <div className={styles.loveStory}>
            <div className={styles.title}>Our 💖 Story</div>
            <LoveStory loveStory={loveStory}/>
        </div>
        <div className={styles.gallery}>
            <div className={styles.title}>Our Recent PhotoShoot 📸</div>
            <Gallery galleryProps={gallery}/>
        </div>
        <div className={styles.events}>
            <div className={styles.title}>Events 📅</div>
                <div className={styles.eventsList}>
                    {events.map((event,index)=>{
                        return(<Events eventProps={event} key={index} />)
                    })}
                </div>
            </div>
        <div className={styles.utility}>
           <Utility />
        </div>
    </div>
  )
}

// *Get Dynamic Data from API
export async function getServerSideProps(context){
    const {weddingId} = context.query
    const response = await fetch('http://localhost:8083/api/wedding/getWeddingInvitation/?id='+weddingId);
    console.log(response)
    const weddingData = await response.json()
  // Pass data to the page via props
  return { props: { weddingData } }
}

export default PersonalWeddingInvite