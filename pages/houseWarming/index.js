import React from 'react'
import Heading from "../../components/HomeInvitationUtil/Heading"
import ImageTraverse from '../../components/HomeInvitationUtil/ImageTraverse'
import WhyComponent from '../../components/HomeInvitationUtil/WhyComponent'
import Features from '../../components/HomeInvitationUtil/Features'
import Comments from '../../components/HomeInvitationUtil/Comments'
import styles from "../../styles/pages/wedding/homePage.module.scss"
import axios from "../../config/axios";

const HouseWarmingHomePage = ({homePageData}) => {
  const {headerTitle,bannerPhoto,whyInvite,whyInvitePhoto,features,comments}=homePageData;
  return (
    <div className={styles.weddingHomePage}>
      {/* Heading */}
      <Heading headerTitle={headerTitle} />
      {/* Image Traverse */}
      <ImageTraverse bannerPhoto={bannerPhoto}/>
      {/* Why */}
      <WhyComponent title="E- HouseWarming Invite" whyInvite={whyInvite} whyInvitePhoto={whyInvitePhoto} /> 
      {/* Features */}
      <Features features={features}  />
      {/* Comments */}
      <Comments comments={comments} />
      {/* Demo Link */}
    </div>
  )
}

// *Get Dynamic Data from API
export async function getServerSideProps(){
  const {data} = await axios.get(`/homepage/getHouseWarmingPage`);
  const homePageData = data;
  // Pass data to the page via props
  return { props: { homePageData } }
}

export default HouseWarmingHomePage