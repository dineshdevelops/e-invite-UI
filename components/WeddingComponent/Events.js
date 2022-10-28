import Link from 'next/link'
import React from 'react'
import styles from "../../styles/components/weddingComponent/events.module.scss"
const Events = ({eventProps}) => {
  // console.log("Events Props"+eventProps)
  return (
        <div className={styles.events}>
                <div className={styles.eventName}>Event Name:{eventProps.eventName}</div>
                <div className={styles.eventDetails}>
                    <div className={styles.date}>Event Date:{eventProps.eventDate}</div>
                    <div className={styles.venue}>Event Venue:{eventProps.eventVenue}</div>
                    <div className={styles.time}>Event Time:{eventProps.eventTime}</div>
                    <div className={styles.map}>Map: <Link href='https://goo.gl/maps/Zvo686gFKGaAumke8'>Click Here</Link></div>
                </div>
        </div>
  )
}

export default Events