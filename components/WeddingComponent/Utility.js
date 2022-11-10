import React from 'react'
import styles from "../../styles/components/weddingComponent/utility.module.scss"
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Utility = ({weddingData}) => {
  const handleShare=async()=>{
    if (navigator.share) {
      await navigator
        .share({
          title:`WeddingInvitation from ${weddingData.groomDetails.groomName} and ${weddingData.brideDetails.brideName}`,
          text:`You are personally Invited for the wedding`,
          url: `http://localhost:3000/wedding/${weddingData._id}`,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong', error);
        });
    }
    else{
      alert("Unable to share")
    }
  }
  return (
    <div className={styles.utility}>
        <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<ShareIcon />} onClick={handleShare}>
              Share
        </Button>
    </div>
  )
}

export default Utility