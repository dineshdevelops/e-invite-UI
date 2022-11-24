import React from 'react'
import styles from "../../styles/components/invitation/videoInvite.module.scss";
import ReactPlayer from 'react-player';

const VideoInvite = () => {
  const videoEl = React.useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  React.useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={styles.videoInvite}>
        <div className={styles.title}>My Personal Video Invite</div>
        <video
          style={{ maxWidth: "100%", width: "600px", height:"550px", margin: "0 auto" }}
          playsInline
          loop
          controls
          controlsList="nodownload"
          autoPlay
          alt="All the devices"
          src="https://res.cloudinary.com/dln6m1ts5/video/upload/v1669290402/video/VIKRAM_%EF%B8%8F_%EF%B8%8F__SANTHANAM_%EF%B8%8F_%EF%B8%8F__WHATSAPP_%EF%B8%8F_%EF%B8%8F__STATUS_%EF%B8%8F_%EF%B8%8F__TAMIL_%EF%B8%8F_%EF%B8%8F__i2cifu.mp4"
          ref={videoEl}
        />
    </div>
  )
}

export default VideoInvite