import React from 'react'
import Button from '@mui/material/Button';
import styles from "../../../styles/components/weddingComponent/creator/gallery.module.scss"
import UploadIcon from '@mui/icons-material/Upload';

const Gallery = ({weddingData,setWeddingData}) => {
  const handleChange=()=>{
    console.log("Handle Change")
  }
  return (
    <div className={styles.gallery}>
        <Button variant="contained" endIcon={<UploadIcon />} sx={{bgcolor:'#f50057'}} onChange={handleChange}>
        UPLOAD
        </Button>
    </div>
  )
}

export default Gallery