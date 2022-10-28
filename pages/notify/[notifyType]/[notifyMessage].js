import { useRouter } from 'next/router';
import React from 'react'
import MailLockIcon from '@mui/icons-material/MailLock';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from "../../../styles/pages/notify/notify.module.scss"

const NotifyType = () => {
    const router = useRouter();
    const {notifyType,notifyMessage} = router.query;
    const displayIcon = ()=>{
        switch(notifyType){
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
        <div className={styles.notify}>
          <div>
            {displayIcon()}
          </div>
          <div className={styles.message}>
            {notifyMessage}
          </div>
        </div>
      )
}

export default NotifyType