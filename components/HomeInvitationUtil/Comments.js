import React from 'react'
import styles from "../../styles/components/HomeInvitationUtil/comments.module.scss";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

export function CommentCard({commentData}){
  console.log("Comment Data"+commentData)
  return(
    <div className={styles.commentCard}>
       <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
       <div className={styles.name}>{commentData.name}</div>
       <div className={styles.comment}>
          {commentData.comment}
       </div>
    </div>
  )
}

const Comments = ({comments}) => {
  return (
    <div className={styles.comments}>
      <div className={styles.top}>
        Comments
        <QuestionAnswerIcon fontSize='large' />
      </div>
      <div className={styles.bottom}>
        {comments.map((comment,index)=>(
          <CommentCard commentData={comment} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Comments