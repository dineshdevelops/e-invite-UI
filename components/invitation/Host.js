import React from 'react'
import CampaignIcon from '@mui/icons-material/Campaign';
import styles from "../../styles/components/invitation/host.module.scss";
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';


export function HostCard({hostDetails}){
  return(
      <div className={styles.hostCard}>
            <div className={styles.name}>{hostDetails.hostName}</div>
            <div className={styles.qualification}>
              <BookIcon fontSize='medium' style={{color:"red"}}/> 
              {hostDetails.hostQualification}
            </div>
            <div className={styles.job}>
              {
                hostDetails.hostJob &&
                <>
                  <WorkIcon fontSize='medium' style={{color:"brown"}} />
                  {hostDetails.hostJob}
                </>
              }
            </div>
        </div>
    )
}

const Host = ({hostProps}) => {
  return (
    <div className={styles.host}>
      {hostProps.map((host,index)=>(
        <HostCard hostDetails={host} key={index} />
      ))}
    </div>
  )
}

export default Host