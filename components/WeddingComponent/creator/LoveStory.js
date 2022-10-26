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
        <FavoriteSharpIcon className={styles.icon}/>
        <TextField
          id="outlined-multiline-static"
          label="Love Story...."
          multiline
          rows={6}
          sx={{width:'80ch'}}
          onChange={handleChange}
          name="loveStory"
        />
    </div>
  )
}

export default LoveStory