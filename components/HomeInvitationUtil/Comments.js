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
       <div className={styles.name}>AKILA</div>
       <div className={styles.comment}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </div>
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
        <CommentCard />
      </div>
    </div>
  )
}

export default Comments