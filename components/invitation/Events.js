import Link from 'next/link'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import { fontSize } from '@mui/system';
import styles from "../../styles/components/invitation/events.module.scss"

export function EventPreview({eventData}){
  console.log("Event Preview")
  return (
    <div className={styles.eventsPreviewCard}>
      <div className={styles.left}>
        <EventIcon sx={{fontSize:50}} className={styles.icon} color={'primary'} />
      </div>
      <div className={styles.right}>
        <div>{eventData.eventName}</div>
        <div>{eventData.eventDate}</div>
        <div>{eventData.eventTime}</div>
        <div>{eventData.eventVenue}</div>
      </div>
    </div>
  )
}
const Events = ({events}) => {
  return (
        <div className={styles.events}>
            {
              events.map((event,index)=>(
                <EventPreview eventData={event} key={index} />
              ))
            }
        </div>
  )
}

export default Events