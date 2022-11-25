import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/pages/wedding/wedding.module.scss"
import AboutGroom from '../../components/WeddingComponent/AboutGroom'
import LoveStory from '../../components/WeddingComponent/LoveStory'
import Gallery from '../../components/WeddingComponent/Gallery'
import Events from '../../components/WeddingComponent/Events';
import Utility from '../../components/WeddingComponent/Utility'
import axios from "../../config/axios"
import AboutBride from '../../components/WeddingComponent/AboutBride'
import Contact from '../../components/WeddingComponent/Contact'
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
        <div className={styles.contact}>
            <Contact weddingData={weddingData} />
        </div>
        <div className={styles.utility}>
           <Utility weddingData={weddingData} />
        </div>
    </div>
  )
}

// *Get Dynamic Data from API
export const getServerSideProps = async(context)=>{
    const {weddingId} = context.query
    const {data} = await axios.get(`/wedding/getWeddingInvitation/?id=${weddingId}`);
    const weddingData=data;
    return { props: { weddingData} }
}


export default PersonalWeddingInvite