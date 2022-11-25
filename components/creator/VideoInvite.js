import React from 'react'
import styles from "../../styles/components/creator/videoInvite.module.scss";
import VideoRecorder from "react-video-recorder";
import axios from "axios"

const VideoInvite =({invitationData,setInvitationData}) => {
    const [videoUrl,setVideoUrl] = React.useState("")
  return (
    <div className={styles.videoInvite}>
        <h5>{videoUrl}</h5>
        <VideoRecorder
          constraints={{
            audio: true,
            video: true
          }}
          countdownTime={3000}
          dataAvailableTimeout={500}
          isFlipped
          timeLimit={30000}
          onRecordingComplete={async(videoBlob) => {
            //Logic to upload video via NodeJs
            const formData = new FormData();
            formData.append('file',videoBlob)
            formData.append("emailId",invitationData.emailId)
            const res =await axios.post("http://localhost:8083/api/cloudinary/uploadVideo",formData);
            setInvitationData({...invitationData,["videoInvite"]:res.data.url})
            console.log("VideoUploaded", res);
          }}
        />
    </div>
  )
}

export default VideoInvite