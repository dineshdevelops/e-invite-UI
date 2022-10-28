import React from 'react'
import styles from "../../styles/components/util/notifyComponent.module.scss";
import MailLockIcon from '@mui/icons-material/MailLock';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const NotifyComponent = (notifyProps) => {

  const displayIcon = ()=>{
    switch(notifyProps.icon){
      case "verify":
        return <MailLockIcon className={styles.icon} style={{color:"orange"}} />
      case "success":
        return <CheckCircleIcon className={styles.icon} style={{color:"green"}}/>
      case "error":
          return <ErrorIcon className={styles.icon} style={{color:"red"}} />
      default:
        return <ErrorIcon className={styles.icon} style={{color:"red"}} />
    }
  }
  return (
    <div className={styles.notifyComponent}>
      <div>
        {displayIcon()}
      </div>
      <div className={styles.message}>
        {notifyProps.message}
      </div>
    </div>
  )
}

export default NotifyComponent