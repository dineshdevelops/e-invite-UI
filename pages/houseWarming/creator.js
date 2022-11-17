import { useRouter } from 'next/router'
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import HostDetails from '../../components/HouseWarmingComponent/creator/HostDetails';
import InviteMessage from '../../components/HouseWarmingComponent/creator/InviteMessage';
import styles from "../../styles/pages/houseWarming/creator.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Gallery from '../../components/WeddingComponent/creator/Gallery';
import Events from '../../components/WeddingComponent/creator/Events';

const Creator = () => {
  const router =useRouter();
  const steps = [
    'InviteMessage',
    'Host Details',
    'Gallery',
    'Events'
  ];
  const [houseWarmingData,setHouseWarmingData]=React.useState({
    inviteMessage:"",
    hostDetails:[],
    gallery:[],
    events:[]
  });
  const [creatorPage,setCreatorPage]=React.useState(0);
  const nextPage = ()=>{
    setCreatorPage((currPage)=>creatorPage+1)
    console.log(houseWarmingData);
    if(creatorPage===5){
      // handleSubmit();
    }
  }
  const previousPage=()=>{
      setCreatorPage((currPage)=>creatorPage-1);
      console.log(houseWarmingData);
  }
  const displayComponent = ()=>{
    switch(creatorPage){
      case 0:
        return(<InviteMessage houseWarmingData={houseWarmingData} setHouseWarmingData={setHouseWarmingData}/>)
      case 1:
        return(<HostDetails houseWarmingData={houseWarmingData} setHouseWarmingData={setHouseWarmingData} />)
      // case 2:
      //   return(<Gallery />)
      // case 3:
      //   return(<Events />)
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