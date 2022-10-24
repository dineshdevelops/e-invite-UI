import Image from 'next/Image'
import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/groomInfo.module.scss"
import nobita from "../../../public/assets/wedding/nobita.jpg"
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import axios from "axios"

const GroomInfo = ({weddingData,setWeddingData}) => {
  // * Get name and value from Text Field
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setWeddingData((prevInfo)=>{
      const newGroomInfo = {...prevInfo};
      newGroomInfo.groomDetails[name]=value;
      return newGroomInfo
    })
  }
  const [groomPhotoUrl,setGroomPhotoUrl] = React.useState("");

  const uploadGroomPhoto = async(e)=>{
    console.log("Upload Groom Photo");
    e.preventDefault();
    const {name}=e.target;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo",file);
    const res= await axios.post("http://localhost:8083/api/cloudinary/uploadImage",formData);
    setGroomPhotoUrl(res.data.secure_url);
    weddingData.groomDetails.groomPhoto=groomPhotoUrl;
    console.log(groomPhotoUrl)
    setWeddingData(weddingData);
    console.log(weddingData)
  }
  return (
    <div className={styles.groomInfo}>
        <Image src={nobita} width='150' height='150' alt="profileImage"  />
        <Button variant="contained" component="label" endIcon={<PhotoCameraIcon />} name="groomPhoto"  sx={{bgcolor:'#f50057'}}>
          Upload Image
          <input hidden accept="image/*" multiple type="file" name="groomPhoto" onChange={uploadGroomPhoto} />
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