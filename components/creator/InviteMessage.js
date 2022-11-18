import Image from 'next/Image'
import React from 'react'
import styles from "../../styles/components/houseWarming/creator/inviteMessage.module.scss"
import TextField from '@mui/material/TextField';

const InviteMessage = ({invitationData,setInvitationData}) => {
  const [inviteMessage,setInviteMessage]=React.useState("");
  const handleChange=()=>{
    setInviteMessage(event.target.value);
    setInvitationData({...invitationData,["inviteMessage"]:inviteMessage})
  };
  return (
    <div className={styles.inviteMessage}>
      <div className={styles.top}>
        <div className={styles.title}>Invitation Message</div>
        <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1668615704/HouseWarming/Defaults/script_jr8iby.png" width={100} height={100} alt="logo" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.previewText}>{inviteMessage}</div>
        <div className={styles.input}>
          <TextField
              id="outlined-multiline-static"
              label="Invitation Message...."
              multiline
              rows={6}
              sx={{ width: {xs:'30ch',md:'60ch'} }}
              onChange={handleChange}
              name="invitationMessage"
            />
        </div>
      </div>
    </div>
  )
}

export default InviteMessage