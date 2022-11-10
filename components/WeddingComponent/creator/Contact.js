import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/contact.module.scss";
import TextField from '@mui/material/TextField';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Contact = ({weddingData,setWeddingData}) => {
  const handleChange=()=>{
    const {name,value}=event.target;
    setWeddingData((prevInfo)=>{
      const newContactDetails = {...prevInfo};
      newContactDetails.contactDetails[name]=value;
      return newContactDetails
    })
  }
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        Share a contact profile for Assistance
        <PhoneInTalkIcon className={styles.icon}/>
      </div>
      <div className={styles.contactForm}>
        <TextField id="outlined-basic" label="Name" variant="outlined" name='contactName' sx={{ width: '40ch' }} onChange={handleChange} />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" name='phoneNumber' sx={{ width: '40ch' }} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Contact