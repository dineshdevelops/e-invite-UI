import Link from 'next/link'
import React from 'react'
import styles from "../../styles/components/weddingComponent/events.module.scss";
import IconButton from '@mui/material/IconButton';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import { fontSize } from '@mui/system';
const Events = ({eventProps}) => {
  // console.log("Events Props"+eventProps)
  const handleCalendarClick = ()=>{
    console.log("Handle Calendar Click")
  }
  return (
        <div className={styles.events}>
          <div>
            <EventIcon sx={{fontSize:50}} className={styles.icon} color={'primary'} />
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.eventName}>{eventProps.eventName}</div>
            <div className={styles.date}>{eventProps.eventDate}</div>
            <div className={styles.time}>{eventProps.eventTime}</div>
            <div className={styles.venue}>{eventProps.eventVenue}</div>
          </div>
        </div>
  )
}

export default Events