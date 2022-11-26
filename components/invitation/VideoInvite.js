import React from 'react'
import styles from "../../styles/components/invitation/videoInvite.module.scss";
import ReactPlayer from 'react-player';

const VideoInvite = ({videoSrc}) => {
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
          src={videoSrc}
          ref={videoEl}
        />
    </div>
  )
}

export default VideoInvite
