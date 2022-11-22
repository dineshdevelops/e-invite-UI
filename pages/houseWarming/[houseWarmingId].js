import Image from 'next/Image';
import { useRouter } from 'next/router'
import React from 'react'
import Heading from '../../components/HouseWarmingComponent/Heading';
import Host from '../../components/HouseWarmingComponent/Host';
import RandomLines from '../../components/HouseWarmingComponent/InviteMessage';
import VideoInvite from '../../components/HouseWarmingComponent/VideoInvite';
import styles from "../../styles/pages/houseWarming/houseWarming.module.scss"
const PersonalHouseWarmingInvite = () => {
    const router =useRouter();
    const {houseWarmingId}= router.query;
  return (
    <div className={styles.houseWarmingInvite}>
        {/* House Warming Heading */}
        <Heading />
        {/* Random Invitation Lines */}
        <RandomLines />
        {/* Constant House Warming Image */}
        <div className={styles.houseImage}>
            <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1668333106/HouseWarming/Defaults/houseWarming_qle1xc.png" width={350} height={300} alt="HouseWarming" />
        </div>
        {/* Hosted By 2 names */}
        <Host />
        {/* Video Invite */}
        <VideoInvite />
        {/* Photos */}
        {/* Events */}
    </div>
  )
}

export default PersonalHouseWarmingInvite