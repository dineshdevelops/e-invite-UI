import Image from 'next/Image'
import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/groomInfo.module.scss"
import nobita from "../../../public/assets/wedding/nobita.jpg"
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';

const GroomInfo = ({weddingData,setWeddingData}) => {
  // * Get name and value from Text Field
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setWeddingData({...weddingData,groomDetails:{...weddingData[name],[name]:value}})
  }
  return (
    <div className={styles.groomInfo}>
        <Image src={nobita} width='150' height='150' alt="profileImage"  />
        <Button variant="contained" endIcon={<PhotoCameraIcon />} sx={{bgcolor:'#f50057'}} name="groomPhoto" onChange={handleChange} >
            Upload Image
        </Button>
        <TextField id="outlined-basic" label="Groom Name" variant="outlined" name='groomName' onChange={handleChange} />
        <TextField
          id="outlined-multiline-static"
          label="About Him"
          multiline
          rows={6}
          sx={{width:'60ch'}}
          name='groomDetails'
          onChange={handleChange}
        />
    </div>
  )
}

export default GroomInfo