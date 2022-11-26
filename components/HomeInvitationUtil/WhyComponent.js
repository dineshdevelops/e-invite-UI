import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import styles from "../../styles/components/HomeInvitationUtil/whyComponent.module.scss"
import Image from 'next/image';

const WhyComponent = ({whyInvite,whyInvitePhoto,title}) => {
  // const data = {
  //   title:"E- Wedding Invite",
  //   justification:["The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made.","The reason why these cakes are so expensive is they are custom-made."]
  // }
  return (
    <div className={styles.whyComponent}>
      <div className={styles.top}>{`Why ${title}`}</div>
      <div className={styles.bottom}>
        <div className={styles.listItem}>
          {whyInvite.map((reason,index)=>(
            <List key={index}>
              <ListItem className={styles.listItem} >
                <RocketLaunchIcon color="primary" fontSize='large' />
                {reason}
              </ListItem>
          </List>
          ))}
        </div>
        <div className={styles.image}>
          <Image src={whyInvitePhoto} width={200} height={200} alt="whyImage" />
        </div>
      </div>
    </div>
  )
}

export default WhyComponent