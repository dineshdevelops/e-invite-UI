import Image from 'next/image'
import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/brideInfo.module.scss"
import nobita from "../../../public/assets/wedding/nobita.jpg"
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import axios from "../../../config/axios"

const BrideInfo = ({weddingData,setWeddingData}) => {

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setWeddingData((prevInfo)=>{
      const newBrideInfo = {...prevInfo};
      newBrideInfo.brideDetails[name]=value;
      return newBrideInfo
    })
  }
  const uploadBridePhoto = async(e)=>{
    console.log("Upload Bride Photo")
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file",file);
    formData.append("emailId",weddingData.emailId);
    const res= await axios.post("/cloudinary/uploadImage",formData);
    const bridePhotoUrl=res.data.secure_url;
    setWeddingData({...weddingData,brideDetails:{bridePhoto:bridePhotoUrl}});
  }
  return (
    <div className={styles.brideInfo}>
      <div className={styles.title}>
        Bride Information 
      </div>
        <Image src={weddingData.brideDetails.bridePhoto} width='150' height='150' alt="profileImage" />
        <Button variant="contained" component="label" endIcon={<PhotoCameraIcon />} name="bridePhoto" sx={{bgcolor:'#f50057'}}>
          Upload Image
          <input hidden accept="image/*" multiple type="file" name="bridePhoto" onChange={uploadBridePhoto} />
        </Button>
        <TextField id="outlined-basic" label="Bride Name" variant="outlined" name="brideName" sx={{ width: {xs:'40ch',md:'35ch'} }} onChange={handleChange} />
        <TextField id="outlined-basic" label="Bride Profession" variant="outlined" name="brideProfession" sx={{ width: {xs:'40ch',md:'35ch'} }} onChange={handleChange} />
        <TextField
          id="outlined-multiline-static"
          label="About Her"
          multiline
          rows={7}
          sx={{width:{
            xs:'40ch',
            md:'60ch'
          }}}
          name="brideDetails"
          onChange={handleChange}
        />
    </div>
  )
}

export default BrideInfo