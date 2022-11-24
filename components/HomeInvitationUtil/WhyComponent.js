import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import styles from "../../styles/components/HomeInvitationUtil/whyComponent.module.scss"
import Image from 'next/Image';

const WhyComponent = () => {
  const data = {
    title:"E- Wedding Invite",
    justification:["The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made."]
  }
  return (
    <div className={styles.whyComponent}>
      <div className={styles.top}>{`Why ${data.title}`}</div>
      <div className={styles.bottom}>
        <div className={styles.listItem}>
          {data.justification.map((reason,index)=>(
            <List key={index}>
              <ListItem className={styles.listItem} >
                <RocketLaunchIcon color="primary" fontSize='large' />
                How about help
              </ListItem>
          </List>
          ))}
        </div>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1669123795/DummyImage/question_jouirt.png" width={200} height={200} alt="whyImage" />
        </div>
      </div>
    </div>
  )
}

export default WhyComponent