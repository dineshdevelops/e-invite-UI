import React from 'react'
import styles from "../../styles/components/weddingComponent/loveStory.module.scss"
const LoveStory = ({loveStory}) => {
  return (
    <div className={styles.loveStory}>
        <p>
          {loveStory}
        </p>
    </div>
  )
}

export default LoveStory