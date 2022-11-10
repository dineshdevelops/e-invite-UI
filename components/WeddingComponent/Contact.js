import React from 'react'
import styles from "../../styles/components/weddingComponent/contact.module.scss"
import IconButton from '@mui/material/IconButton';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Contact = ({weddingData}) => {
  const {contactName,phoneNumber}= weddingData.contactDetails;
  const telNumber = `tel:${phoneNumber}`
  return (
    <div className={styles.contact}>
        <p>Any Doubt ? Feel free to reach {contactName} for assistance </p>
        <div>
            <IconButton aria-label="call" size="large" className={styles.callStack}  href={telNumber}>
                <PhoneInTalkIcon fontSize="large" color="primary"  />
                <p>{phoneNumber}</p>
             </IconButton>
        </div>
    </div>
  )
}

export default Contact