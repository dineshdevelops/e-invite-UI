import React from 'react'
import styles from "../../styles/components/weddingComponent/utility.module.scss"
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Utility = () => {
  return (
    <div className={styles.utility}>
         <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<ShareIcon />}>
            Share
        </Button>
        <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<CalendarMonthIcon />}>
            Add to calendar
        </Button>
    </div>
  )
}

export default Utility