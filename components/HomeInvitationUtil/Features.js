import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/features.module.scss";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Image from 'next/image';

export function FeatureCard({feature}){
  return(
    <div className={styles.featureCard}>
      <div className={styles.image}>
        <Image src={feature.image} className={styles.image} width={1500} height={1500} alt="HelpText" />
      </div>
      <div className={styles.featureText}>
        {feature.content}
      </div>
    </div>
  )
}

const Features = () => {
  const data = [
    {
      image:"https://res.cloudinary.com/dln6m1ts5/image/upload/v1669125375/DummyImage/carousel3_f6df14.jpg",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      image:"https://res.cloudinary.com/dln6m1ts5/image/upload/v1669125375/DummyImage/carousel3_f6df14.jpg",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      image:"https://res.cloudinary.com/dln6m1ts5/image/upload/v1669125375/DummyImage/carousel3_f6df14.jpg",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]
  return (
    <div className={styles.features}>
      <div className={styles.top}>
        Our Features
        <AutoFixHighIcon color="error" fontSize='large' />
      </div>
      <div className={styles.bottom}>
        {
          data.map((feature,index)=>(
            <FeatureCard feature={feature} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Features