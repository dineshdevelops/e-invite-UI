import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/events.module.scss"
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

const Events = ({weddingData,setWeddingData}) => {
  const [eventDetails,setEventDetails]=React.useState({
    eventName:"",
    eventDate:"1999-09-16",
    eventTime:"05:30",
    eventVenue:"",
    eventMapLink:""
  })
  const handleChange=()=>{
    const {name,value}=event.target;
    setEventDetails({...eventDetails,[name]:value});
  }
  const addEvent=()=>{
    weddingData.events.push(eventDetails);
    setEventDetails({
      eventName:"",
      eventDate:"1999-09-16",
      eventTime:"05:30",
      eventVenue:"",
      eventMapLink:""
    });
    console.log(weddingData)
  }
  return (
    <div className={styles.events}>
        <TextField id="outlined-basic" label="Event Name" variant="outlined" value={eventDetails.eventName} sx={{width:'40ch'}} name="eventName" onChange={handleChange}  />
        <TextField id="date" label="Event Date" type="date" value={eventDetails.eventDate} sx={{ width: '40ch' }}InputLabelProps={{shrink: true,}} name="eventDate" onChange={handleChange} />
        <TextField id="time" label="Event Time" type="time" value={eventDetails.eventTime} inputProps={{step: 300 }} sx={{ width: '40ch' }} name="eventTime" onChange={handleChange} />
        <TextField id="outlined-basic" label="Event Venue" variant="outlined" value={eventDetails.eventVenue} sx={{width:'40ch'}} name="eventVenue" onChange={handleChange} />
        <TextField id="outlined-basic" label="Event Map Link" variant="outlined" value={eventDetails.eventMapLink} sx={{width:'40ch'}} name="eventMapLink" onChange={handleChange} />
        <Button variant="contained" endIcon={<AddCircleIcon />} sx={{bgcolor:'#f50057'}} name="events" onClick={addEvent} >
            Add Event
        </Button>
    </div>
  )
}

export default Events