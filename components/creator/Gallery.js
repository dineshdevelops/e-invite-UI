import React from 'react'
import Button from '@mui/material/Button';
import styles from "../../styles/components/weddingComponent/creator/gallery.module.scss"
import UploadIcon from '@mui/icons-material/Upload';
import axios from "../../config/axios"
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Gallery = ({invitationData,setInvitationData}) => {
  const uploadGallery = async(e)=>{
    console.log("Upload Gallery Photo");
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file",file);
    formData.append("emailId",invitationData.emailId)
    try{
      const res= await axios.post("/cloudinary/uploadImage",formData);
      let tempGallery = invitationData.gallery;
      console.log(tempGallery)
      tempGallery.push(res.data.secure_url);
      // console.log(tempGallery)
      setInvitationData({...invitationData,gallery:tempGallery});
      // console.log(weddingData)
    }
    catch(error){
      console.log(error)
    }
  }

  const removeImage = async(imgUrl)=>{
    //Get the updatedGallery array
    const updatedGallery  = invitationData.gallery.filter((img)=>img !== imgUrl);
    try {
      const requestBody = {imgUrl:imgUrl}
      const res = await axios.post("/cloudinary/deleteImage",requestBody)
      console.log("Image Delete API "+res)
    } catch (error) {
      console.log(error)
    }
    setInvitationData({...invitationData,gallery:updatedGallery})
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.title}>
        Upload your photo-shoots
      </div>
         <Button variant="contained" component="label" endIcon={<UploadIcon />} name="galleryPhoto"  sx={{bgcolor:'#f50057'}}>
          Upload Image
          <input hidden accept="image/*" multiple type="file" name="galleryPhoto" onChange={uploadGallery} />
        </Button>
        <div className={styles.imagePreview}>
          {invitationData.gallery.map((imgUrl,index)=>(
            <div className={styles.imageTraverse} key={index}>
             <Image src={imgUrl} width='300' height='300' alt="imagePreview" key={index} />
             <IconButton aria-label="delete" size="large" onClick={(e)=>removeImage(imgUrl)}>
                <DeleteIcon fontSize="inherit" color="error"  />
             </IconButton>
            </div>
          ))
          }
        </div>
    </div>
  )
}

export default Gallery