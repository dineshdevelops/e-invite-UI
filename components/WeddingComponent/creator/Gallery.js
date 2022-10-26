import React from 'react'
import Button from '@mui/material/Button';
import styles from "../../../styles/components/weddingComponent/creator/gallery.module.scss"
import UploadIcon from '@mui/icons-material/Upload';
import axios from "axios"
import Image from 'next/Image';

const Gallery = ({weddingData,setWeddingData}) => {
  let galleryImages;
  const uploadGallery = async(e)=>{
    console.log("Upload Gallery Photo");
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo",file);
    const res= await axios.post("http://localhost:8083/api/cloudinary/uploadImage",formData);
    weddingData.gallery.push(res.data.secure_url);
    console.log(weddingData)
  }

  return (
    <div className={styles.gallery}>
         <Button variant="contained" component="label" endIcon={<UploadIcon />} name="galleryPhoto"  sx={{bgcolor:'#f50057'}}>
          Upload Image
          <input hidden accept="image/*" multiple type="file" name="galleryPhoto" onChange={uploadGallery} />
        </Button>
        <div className={styles.imagePreview}>
          {weddingData.gallery && weddingData.gallery.map((imgUrl,index)=>(
            <Image src={imgUrl} width='200' height='200' alt="imagePreview" key={index} />
          ))
          }
        </div>
    </div>
  )
}

export default Gallery