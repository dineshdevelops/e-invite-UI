import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import Heading from '../../components/HouseWarmingComponent/Heading';
import InviteMessage from '../../components/HouseWarmingComponent/InviteMessage';
import VideoInvite from '../../components/invitation/VideoInvite';
import Events from '../../components/invitation/Events';
import Gallery from '../../components/invitation/Gallery';
import Host from '../../components/invitation/Host';
import styles from "../../styles/pages/houseWarming/houseWarming.module.scss"
const PersonalHouseWarmingInvite = ({houseWarmingData}) => {
    const router =useRouter();
    const {inviteMessage,hostDetails,gallery,events} = houseWarmingData;
  return (
    <div className={styles.houseWarmingInvite}>
        {/* House Warming Heading */}
        <Heading hostDetails={hostDetails} />
        {/* Random Invitation Lines */}
        <InviteMessage inviteMessage={inviteMessage} />
        {/* Constant House Warming Image */}
        <div className={styles.houseImage}>
            <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1668333106/HouseWarming/Defaults/houseWarming_qle1xc.png" width={350} height={300} alt="HouseWarming" />
        </div>
        <InviteMessage inviteMessage={"Please grace the Occasion with your presence with you and your family blessings"} />
        {/* Hosted By 2 names */}
        <div className={styles.title}>
          The HouseWarming function is hosted by 🎤
        </div>
        <Host hostProps={hostDetails}/>
        {/* Video Invite */}
        <VideoInvite />
        {/* Photos */}
        <div className={styles.title}>
          Check Out the Gallery 📸
        </div>
        <Gallery galleryProps={gallery}/>
        {/* Events */}
        <div className={styles.title}>
          Events 📆
        </div>
        <Events events={events}/>
    </div>
  )
}

// *Get Dynamic Data from API
export async function getServerSideProps(context){
  const {houseWarmingId} = context.query
  const {data} = await axios.get(`/houseWarming/getHouseWarmingData/?id=${houseWarmingId}`);
  const houseWarmingData = data;
  // Pass data to the page via props
  return { props: { houseWarmingData } }
}


export default PersonalHouseWarmingInvite