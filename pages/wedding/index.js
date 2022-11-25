import React from 'react'
import Heading from "../../components/HomeInvitationUtil/Heading"
import ImageTraverse from '../../components/HomeInvitationUtil/ImageTraverse'
import WhyComponent from '../../components/HomeInvitationUtil/WhyComponent'
import Features from '../../components/HomeInvitationUtil/Features'
import Comments from '../../components/HomeInvitationUtil/Comments'
import styles from "../../styles/pages/wedding/homePage.module.scss"

const Wedding = () => {
  return (
    <div className={styles.weddingHomePage}>
      {/* Heading */}
      <Heading />
      {/* Image Traverse */}
      <ImageTraverse/>
      {/* Why */}
      <WhyComponent /> 
      {/* Features */}
      <Features />
      {/* Comments */}
      <Comments />
      {/* Demo Link */}
    </div>
  )
}

export default Wedding