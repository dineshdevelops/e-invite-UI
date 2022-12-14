import { useRouter } from 'next/router'
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import styles from "../../styles/pages/houseWarming/creator.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Gallery from '../../components/creator/Gallery';
import Events from '../../components/creator/Events';
import InviteMessage from '../../components/creator/InviteMessage';
import HostDetails from '../../components/creator/HostDetails';
import axios from '../../config/axios'
import VideoInvite from '../../components/creator/VideoInvite';
import Email from '../../components/creator/Email';

const Creator = () => {
  const router =useRouter();
  const steps = [
    'Email Verification',
    'InviteMessage',
    'Host Details',
    'Gallery',
    'Video Invite',
    'Events'
  ];
  const [houseWarmingData,setHouseWarmingData]=React.useState({
    inviteMessage:"",
    hostDetails:[],
    gallery:[],
    events:[],
    emailId:""
  });
  const [creatorPage,setCreatorPage]=React.useState(0);
  const handleSubmit=async()=>{
    console.log("Handle Submit Page")
    try {
      const res =  await axios.post('/houseWarming/postCreator',houseWarmingData);
      console.log("Post Creator Response "+res)
      const notifyMessage = res.data.message;
      if(res.status===200){
        router.push("/notify/approve/"+notifyMessage)
      }
    } catch (error) {
      console.log(error)
      const notifyMessage = "Error Try to contact DINESH";
      router.push("/notify/error/"+notifyMessage)
    }
  }
  const nextPage = ()=>{
    setCreatorPage((currPage)=>creatorPage+1)
    console.log(creatorPage);
    console.log(houseWarmingData);
    if(creatorPage===5){
      handleSubmit();
    }
  }
  const previousPage=()=>{
      setCreatorPage((currPage)=>creatorPage-1);
      console.log(houseWarmingData);
  }
  const displayComponent = ()=>{
    switch(creatorPage){
      case 0:
        return(<Email invitationData={houseWarmingData} setInvitationData={setHouseWarmingData}/>)
      case 1:
        return(<InviteMessage invitationData={houseWarmingData} setInvitationData={setHouseWarmingData}/>)
      case 2:
        return(<HostDetails invitationData={houseWarmingData} setInvitationData={setHouseWarmingData} />)
      case 3:
        return(<Gallery invitationData={houseWarmingData} setInvitationData={setHouseWarmingData}/>)
      case 4:
        return(<VideoInvite invitationData={houseWarmingData} setInvitationData={setHouseWarmingData}/>)
      case 5:
        return(<Events invitationData={houseWarmingData} setInvitationData={setHouseWarmingData}/>)
    }
  }
  return (
    <div className={styles.creator}>
       <Stepper activeStep={creatorPage} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={styles.currFormPage}>
        {displayComponent()}
      </div>
      <div className={styles.navigator}>
        <Button variant="contained" disabled={creatorPage == 0} sx={{bgcolor:'#f50057'}} startIcon={<ArrowBackIcon />} onClick={previousPage}>
            Previous
        </Button>
        <Button variant="contained" disabled={creatorPage == 6} sx={{bgcolor:'#f50057'}} endIcon={<ArrowForwardIcon />} onClick={nextPage}>
            Next
        </Button>
      </div>
    </div>
  )
}

export default Creator