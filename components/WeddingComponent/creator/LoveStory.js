import React from 'react'
import styles from "../../../styles/components/weddingComponent/creator/loveStory.module.scss"
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import TextField from '@mui/material/TextField';

const LoveStory = ({weddingData,setWeddingData}) => {
  const handleChange=()=>{
    const {name,value}=event.target;
    setWeddingData({...weddingData,[name]:value})
  }
  return (
    <div className={styles.loveStory}>
      <div className={styles.title}>
        Share your Love Story 
      </div>
      <div className={styles.top}>
        <p>{weddingData.brideDetails.brideName}</p>
        <FavoriteSharpIcon className={styles.icon}/>
        <p>{weddingData.groomDetails.groomName}</p>
      </div>
      <div className={styles.bottom}>
        <TextField
            id="outlined-multiline-static"
            label="Love Story...."
            multiline
            rows={6}
            sx={{ width: {xs:'40ch',md:'80ch'} }}
            onChange={handleChange}
            name="loveStory"
          />
      </div>
    </div>
  )
}

export default LoveStory