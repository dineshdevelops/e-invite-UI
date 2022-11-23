import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/comments.module.scss";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

export function CommentCard(){
  return(
    <div className={styles.commentCard}>
       <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
    </div>
  )
}

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.top}>
        Comments
        <QuestionAnswerIcon fontSize='large' />
      </div>
      <div className={styles.bottom}>
        <CommentCard />
      </div>
    </div>
  )
}

export default Comments