import React from 'react'
import styles from "../../styles/components/houseWarming/creator/hostDetails.module.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function HostPreview({invitationData,setInvitationData,hostDetail}){
  const removeHost=(hostName)=>{
    //Get the updatedHost array
    const updatedHostDetails  = invitationData.hostDetails.filter((host)=>host.hostName !== hostName);
    setInvitationData({...invitationData,hostDetails:updatedHostDetails})
  }
  return(
    <div className={styles.hostPreview}>
      <span>{hostDetail.hostName}</span>
      <span>{hostDetail.hostQualification}</span>
      <span>{hostDetail.hostJob}</span>
      <IconButton aria-label="delete" size="medium" onClick={(e)=>removeHost(hostDetail.hostName)}>
        <DeleteIcon fontSize="inherit" color="error"  />
      </IconButton>
    </div>
  )
} 

const HostDetails = ({invitationData,setInvitationData}) => {
  const [hostDetails,setHostDetails]=React.useState({
    hostName:"",
    hostQualification:"",
    hostJob:""
  });
  const handleChange=()=>{
    const {name,value}=event.target;
    setHostDetails({...hostDetails,[name]:value});
  };
  const handleHost = ()=>{
    console.log("Handle Host");
    // console.log(hostDetails);
    invitationData.hostDetails.push(hostDetails);
    setHostDetails({
      hostName:"",
      hostQualification:"",
      hostJob:""
    })
  }
  return (
    <div className={styles.hostDetails}>
      <div className={styles.top}>
        <div className={styles.title}>Host Details</div>
        <Image src="https://res.cloudinary.com/dln6m1ts5/image/upload/v1668620465/HouseWarming/Defaults/hostPng_q0htai.png" width={200} height={200} alt="HostPlanner" />
      </div>
      <div className={styles.bottom}>
        <TextField id="outlined-basic" label="Host Name" variant="outlined" name="hostName" value={hostDetails.hostName} sx={{ width: {xs:'40ch',md:'35ch'} }} onChange={handleChange} />
        <TextField id="outlined-basic" label="Host Qualification" variant="outlined" name="hostQualification" value={hostDetails.hostQualification} sx={{ width: {xs:'40ch',md:'35ch'} }} onChange={handleChange} />
        <TextField id="outlined-basic" label="Host Job" variant="outlined" name="hostJob" value={hostDetails.hostJob} sx={{ width: {xs:'40ch',md:'35ch'} }} onChange={handleChange} />
        <Button variant="contained" endIcon={<AddCircleIcon />} sx={{bgcolor:'#f50057'}} name="events" onClick={handleHost} >
            Add Host
        </Button>
        <div className={styles.eventsPreview}>
            {invitationData.hostDetails.map((hostDetail,index)=>(
                <HostPreview key={index} hostDetail={hostDetail} invitationData={invitationData} setInvitationData={setInvitationData} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default HostDetails