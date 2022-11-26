import React from 'react'
import Heading from "../../components/HomeInvitationUtil/Heading"
import ImageTraverse from '../../components/HomeInvitationUtil/ImageTraverse'
import WhyComponent from '../../components/HomeInvitationUtil/WhyComponent'
import Features from '../../components/HomeInvitationUtil/Features'
import Comments from '../../components/HomeInvitationUtil/Comments'
import styles from "../../styles/pages/wedding/homePage.module.scss"
import axios from "../../config/axios";

const Wedding = ({weddingPageData}) => {
  const {headerTitle,bannerPhoto,whyInvite,whyInvitePhoto,features,comments}=weddingPageData;
  return (
    <div className={styles.weddingHomePage}>
      {/* Heading */}
      <Heading headerTitle={headerTitle} />
      {/* Image Traverse */}
      <ImageTraverse bannerPhoto={bannerPhoto}/>
      {/* Why */}
      <WhyComponent title="E- Wedding Invite" whyInvite={whyInvite} whyInvitePhoto={whyInvitePhoto} /> 
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
  const weddingPageData = data;
  // Pass data to the page via props
  return { props: { weddingPageData } }
}

export default Wedding