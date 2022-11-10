import Link from 'next/link'
import React from 'react'
import styles from "../../styles/components/weddingComponent/events.module.scss";
import IconButton from '@mui/material/IconButton';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Events = ({eventProps}) => {
  // console.log("Events Props"+eventProps)
  const handleCalendarClick = ()=>{
    console.log("Handle Calendar Click")
  }
  return (
        <div className={styles.events}>
                <div className={styles.eventDetails}>
                    <div className={styles.eventName}>Event Name:{eventProps.eventName}</div>
                    <div className={styles.date}>Event Date:{eventProps.eventDate}</div>
                    <div className={styles.venue}>Event Venue:{eventProps.eventVenue}</div>
                    <div className={styles.time}>Event Time:{eventProps.eventTime}</div>
                    <div className={styles.map}>Map: <Link href='https://goo.gl/maps/Zvo686gFKGaAumke8'>Click Here</Link></div>
                </div>
                {/* //! Add to Calendar */}
                {/* <div className={styles.addToCalendar} onClick={handleCalendarClick}  >
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <EventAvailableIcon fontSize='large' />
                  </IconButton>
                  <p>Add to Calendar</p>
                </div> */}
        </div>
  )
}

export default Events