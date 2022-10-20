import React from 'react'
import styles from "../../styles/components/weddingComponent/events.module.scss"
const Events = () => {
  return (
        <div className={styles.events}>
                <div className={styles.eventName}>Event 1</div>
                <div className={styles.eventDetails}>
                    <div className={styles.date}>Date: 16/09/2023</div>
                    <div className={styles.venue}>Venue: Reddy Thirumana Mandapam</div>
                    <div className={styles.time}>Time: 6:00 AM - 10:00 AM</div>
                    <div className={styles.map}>Map: <a href='https://goo.gl/maps/Zvo686gFKGaAumke8'>Click Here</a></div>
                </div>
        </div>
  )
}

export default Events