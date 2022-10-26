import Image from 'next/Image'
import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/brideInfo.module.scss"
import nobita from "../../../public/assets/wedding/nobita.jpg"
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import axios from "axios"

const BrideInfo = ({weddingData,setWeddingData}) => {
  const [bridePhotoUrl,setBridePhotoUrl] = React.useState("");
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
    formData.append("photo",file);
    const res= await axios.post("http://localhost:8083/api/cloudinary/uploadImage",formData);
    setBridePhotoUrl(res.data.secure_url);
    weddingData.brideDetails.bridePhoto=bridePhotoUrl;
    setWeddingData(weddingData);
    console.log(bridePhotoUrl);
    console.log(weddingData)
  }
  return (
    <div className={styles.brideInfo}>
        <Image src={nobita} width='150' height='150' alt="profileImage" />
        <Button variant="contained" component="label" endIcon={<PhotoCameraIcon />} name="bridePhoto" sx={{bgcolor:'#f50057'}}>
          Upload Image
          <input hidden accept="image/*" multiple type="file" name="bridePhoto" onChange={uploadBridePhoto} />
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

export default BrideInfo