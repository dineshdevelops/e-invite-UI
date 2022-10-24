import Image from 'next/Image'
import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/brideInfo.module.scss"
import nobita from "../../../public/assets/wedding/nobita.jpg"
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';

const GroomInfo = ({weddingData,setWeddingData}) => {
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setWeddingData({...weddingData,brideDetails:{...weddingData[name],[name]:value}})
  }
  return (
    <div className={styles.brideInfo}>
        <Image src={nobita} width='150' height='150' alt="profileImage" />
        <Button variant="contained" endIcon={<PhotoCameraIcon />} sx={{bgcolor:'#f50057'}} name="bridePhoto" onChange={handleChange} >
            Upload Image
        </Button>
        <TextField id="outlined-basic" label="Bride Name" variant="outlined" name="brideName" onChange={handleChange} />
        <TextField
          id="outlined-multiline-static"
          label="About Her"
          multiline
          rows={6}
          sx={{width:'60ch'}}
          name="brideDetails"
          onChange={handleChange}
        />
    </div>
  )
}

export default GroomInfo