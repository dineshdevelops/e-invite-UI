import React from 'react'
import styles from "../../styles/components/weddingComponent/creator/events.module.scss"
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EventIcon from '@mui/icons-material/Event';

export function EventPreview({eventDetails,invitationData,setInvitationData}) {
  const removeEvent=(eventName)=>{
    //Get the updatedGallery array
    const updatedEvents  = invitationData.events.filter((event)=>event.eventName !== eventName);
    setInvitationData({...invitationData,events:updatedEvents})
  }
  return (
    <div className={styles.eventPreview}>
      <span>Event Name: {eventDetails.eventName}</span>
      <span>Event Date: {eventDetails.eventDate}</span>
      <span>Event Time: {eventDetails.eventTime}</span>
      <span>Event Venue: {eventDetails.eventVenue}</span>
      <IconButton aria-label="delete" size="medium" onClick={(e)=>removeEvent(eventDetails.eventName)}>
        <DeleteIcon fontSize="inherit" color="error"  />
      </IconButton>
    </div>
  )
}
const Events = ({invitationData,setInvitationData}) => {
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
    invitationData.events.push(eventDetails);
    //Resetting event form after array push
    setEventDetails({
      eventName:"",
      eventDate:"1999-09-16",
      eventTime:"05:30",
      eventVenue:"",
      eventMapLink:""
    });
    console.log(invitationData)
  }
  return (
    <div className={styles.events}>
      <div className={styles.title}>
        Add your Event Plans
        <EventIcon className={styles.icon} />
      </div>
        <TextField id="outlined-basic" label="Event Name" variant="outlined" value={eventDetails.eventName} sx={{width:'40ch'}} name="eventName" onChange={handleChange}  />
        <TextField id="date" label="Event Date" type="date" value={eventDetails.eventDate} sx={{ width: '40ch' }}InputLabelProps={{shrink: true,}} name="eventDate" onChange={handleChange} />
        <TextField id="time" label="Event Time" type="time" value={eventDetails.eventTime} inputProps={{step: 300 }} sx={{ width: '40ch' }} name="eventTime" onChange={handleChange} />
        <TextField id="outlined-basic" label="Event Venue" variant="outlined" value={eventDetails.eventVenue} sx={{width:'40ch'}} name="eventVenue" onChange={handleChange} />
        <TextField id="outlined-basic" label="Event Map Link" variant="outlined" value={eventDetails.eventMapLink} sx={{width:'40ch'}} name="eventMapLink" onChange={handleChange} />
        <Button variant="contained" endIcon={<AddCircleIcon />} sx={{bgcolor:'#f50057'}} name="events" onClick={addEvent} >
            Add Event
        </Button>
        <div className={styles.eventsPreview}>
          {invitationData.events.map((event,index)=>(
            //Pass the individual events to EventPreview function and weddingData and setWeddingData
            <EventPreview eventDetails={event} invitationData={invitationData} setInvitationData={setInvitationData} key={index} />
          ))}
        </div>
    </div>
  )
}

export default Events