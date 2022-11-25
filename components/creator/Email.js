import React from 'react';
import styles from "../../styles/components/invitation/email.module.scss";
import TextField from '@mui/material/TextField';

const Email = ({invitationData,setInvitationData}) => {
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setInvitationData({...invitationData,[name]:value});
        console.log(invitationData)
    }
  return (
    <div className={styles.email}>
        <TextField id="outlined-basic" label="Email Id" variant="outlined" value={invitationData.emailId} sx={{width:'40ch'}} name="emailId" onChange={handleChange}  />
    </div>
  )
}

export default Email