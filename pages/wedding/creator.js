import React from 'react'
import styles from "../../styles/pages/wedding/creator.module.scss"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroomInfo from '../../components/WeddingComponent/creator/GroomInfo';
import BrideInfo from '../../components/WeddingComponent/creator/BrideInfo';
import LoveStory from '../../components/WeddingComponent/creator/LoveStory';
import Gallery from '../../components/creator/Gallery';
import Events from '../../components/creator/Events';
import { useRouter } from 'next/router';
import axios from "../../config/axios";
import Contact from '../../components/WeddingComponent/creator/Contact';
import Email from '../../components/creator/Email';

const Creator = () => {
  const router = useRouter();
    const steps=[
        'Email Verification',
        'Groom Info',
        'Bride Info',
        'Love Story',
        'Gallery',
        'Events',
        'Contact Assistance'
    ];
    // !Wedding Data which has to be passed across Stepper components
    const [weddingData,setWeddingData]=React.useState({
      // userId:localStorage.getItem('userId'),
      groomDetails:{
        groomName:"",
        groomDetails:"",
        groomPhoto:"https://res.cloudinary.com/dln6m1ts5/image/upload/v1666800337/DummyImage/dummyGroom_cfljwm.png"
      },
      brideDetails:{
        brideName:"",
        brideDetails:"",
        bridePhoto:"https://res.cloudinary.com/dln6m1ts5/image/upload/v1666800338/DummyImage/dummyBride_a97u15.png"
      },
      loveStory:"",
      gallery:[],
      events:[],
      contactDetails:{
        contactName:"",
        contactNumber:""
      },
      emailId:""
    })
    const [creatorPage,setCreatorPage] = React.useState(0);
    const nextPage = ()=>{
        setCreatorPage((currPage)=>creatorPage+1)
        console.log(weddingData);
        if(creatorPage===6){
          handleSubmit();
        }
    }
    const previousPage=()=>{
        setCreatorPage((currPage)=>creatorPage-1);
        console.log(creatorPage);
    }
    const handleSubmit=async()=>{
      console.log(weddingData);
      try {
        const res =  await axios.post('/wedding/postCreator',weddingData);
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
    const displayComponent = ()=>{
        switch(creatorPage){
            case 0:
                return(<Email invitationData={weddingData} setInvitationData={setWeddingData}/>)
            case 1:
                return(<GroomInfo weddingData={weddingData} setWeddingData={setWeddingData} />);
            case 2:
                return(<BrideInfo weddingData={weddingData} setWeddingData={setWeddingData} />);
            case 3:
                return(<LoveStory weddingData={weddingData} setWeddingData={setWeddingData} />);
            case 4:
                return(<Gallery invitationData={weddingData} setInvitationData={setWeddingData} />)
            case 5:
                return(<Events invitationData={weddingData} setInvitationData={setWeddingData} />)
            case 6:
                return(<Contact weddingData={weddingData} setWeddingData={setWeddingData} />)
        }
    }
    // React.useEffect(()=>{
    //   const userId = localStorage.getItem('userId');
    //   const token = localStorage.getItem('token');
    //   if(!userId || !token){
    //     router.push('/authentication/login')
    //   }
    //   console.log("UseEffect called at Creator page")
    // },[localStorage.getItem('token'),localStorage.getItem('userId')])
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
        <Button variant="contained" disabled={creatorPage == 7} sx={{bgcolor:'#f50057'}} endIcon={<ArrowForwardIcon />} onClick={nextPage}>
            Next
        </Button>
      </div>
    </div>
  )
}

export default Creator